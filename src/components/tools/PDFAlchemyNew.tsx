'use client'

import React from 'react'
import { useState, useRef, useCallback, useEffect } from 'react'
import * as saveAs from 'file-saver'

interface PDFFile {
  id: string
  name: string
  file: File
  pages: number
  size: number
}

type Tool = 'split' | 'merge' | 'compress' | 'convert'

interface ProcessingStatus {
  isProcessing: boolean
  progress: number
  message: string
}

export default function PDFAlchemy() {
  // State management
  const [activeTool, setActiveTool] = useState<Tool>('split')
  const [pdfFiles, setPdfFiles] = useState<PDFFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<ProcessingStatus>({
    isProcessing: false,
    progress: 0,
    message: ''
  })
  const [selectedPages, setSelectedPages] = useState<number[]>([])
  const [splitRange, setSplitRange] = useState({ start: 1, end: 1 })
  const [compressionLevel, setCompressionLevel] = useState(0.7)
  const [imageFormat, setImageFormat] = useState<'png' | 'jpg'>('png')
  const [imageQuality, setImageQuality] = useState(300) // DPI
  const [isClient, setIsClient] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // File handling
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }, [])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
    const files = Array.from(e.dataTransfer.files).filter(file => file.type === 'application/pdf')
    if (files.length > 0) {
      handleFiles(files)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter(file => file.type === 'application/pdf')
    if (files.length > 0) {
      handleFiles(files)
    }
  }, [])

  const handleFiles = useCallback(async (files: File[]) => {
    setStatus({
      isProcessing: true,
      progress: 0,
      message: 'Processing PDF files...'
    })

    try {
      const PDFLib = await import('pdf-lib')
      const newPdfFiles: PDFFile[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setStatus(prev => ({
          ...prev,
          progress: (i / files.length) * 100,
          message: `Processing ${file.name}...`
        }))

        try {
          const arrayBuffer = await file.arrayBuffer()
          const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer)
          const pageCount = pdfDoc.getPageCount()

          newPdfFiles.push({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            file: file,
            pages: pageCount,
            size: file.size
          })
        } catch (error) {
          console.error(`Error processing ${file.name}:`, error)
        }
      }

      setPdfFiles(prev => [...prev, ...newPdfFiles])
      
      if (newPdfFiles.length === 1) {
        setSplitRange({ start: 1, end: newPdfFiles[0].pages })
      }

      setStatus({ isProcessing: false, progress: 100, message: `Successfully processed ${newPdfFiles.length} file(s)` })
      
      // Clear the file input to allow selecting the same file again
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Error processing PDF files:', error)
      setStatus({ isProcessing: false, progress: 0, message: 'Error processing PDF files' })
    }
  }, [])

  // Utility function for file size formatting
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  }

  const removePdfFile = useCallback((id: string) => {
    setPdfFiles(prev => prev.filter(pdf => pdf.id !== id))
    if (pdfFiles.length === 1) {
      setSelectedPages([])
      setSplitRange({ start: 1, end: 1 })
    }
  }, [pdfFiles.length])

  // PDF processing functions
  const splitPdf = useCallback(async () => {
    if (pdfFiles.length === 0) return

    const pdfFile = pdfFiles[0]
    setStatus({
      isProcessing: true,
      progress: 0,
      message: 'Splitting PDF...'
    })

    try {
      const PDFLib = await import('pdf-lib')
      const arrayBuffer = await pdfFile.file.arrayBuffer()
      const originalPdf = await PDFLib.PDFDocument.load(arrayBuffer)

      const pagesToExtract = selectedPages.length > 0 ? selectedPages : 
        Array.from({ length: splitRange.end - splitRange.start + 1 }, (_, i) => splitRange.start + i)

      for (let i = 0; i < pagesToExtract.length; i++) {
        const pageIndex = pagesToExtract[i] - 1 // Convert to 0-based index
        
        setStatus(prev => ({
          ...prev,
          progress: (i / pagesToExtract.length) * 100,
          message: `Extracting page ${pagesToExtract[i]}...`
        }))

        const newPdf = await PDFLib.PDFDocument.create()
        const [copiedPage] = await newPdf.copyPages(originalPdf, [pageIndex])
        newPdf.addPage(copiedPage)

        const pdfBytes = await newPdf.save()
        const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
        saveAs.saveAs(blob, `${pdfFile.name.replace('.pdf', '')}_page_${pagesToExtract[i]}.pdf`)
      }

      setStatus({ isProcessing: false, progress: 100, message: `Successfully split into ${pagesToExtract.length} file(s)` })
    } catch (error) {
      console.error('Error splitting PDF:', error)
      setStatus({ isProcessing: false, progress: 0, message: 'Error splitting PDF' })
    }
  }, [pdfFiles, selectedPages, splitRange])

  const mergePdfs = useCallback(async () => {
    if (pdfFiles.length < 2) return

    setStatus({
      isProcessing: true,
      progress: 0,
      message: 'Merging PDFs...'
    })

    try {
      const PDFLib = await import('pdf-lib')
      const mergedPdf = await PDFLib.PDFDocument.create()

      for (let i = 0; i < pdfFiles.length; i++) {
        const pdfFile = pdfFiles[i]
        setStatus(prev => ({
          ...prev,
          progress: (i / pdfFiles.length) * 100,
          message: `Adding ${pdfFile.name}...`
        }))

        const arrayBuffer = await pdfFile.file.arrayBuffer()
        const pdf = await PDFLib.PDFDocument.load(arrayBuffer)
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
        copiedPages.forEach((page) => mergedPdf.addPage(page))
      }

      const pdfBytes = await mergedPdf.save()
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
      const mergedFileName = `merged_${Date.now()}.pdf`
      saveAs.saveAs(blob, mergedFileName)

      setStatus({ isProcessing: false, progress: 100, message: 'Successfully merged PDFs' })
    } catch (error) {
      console.error('Error merging PDFs:', error)
      setStatus({ isProcessing: false, progress: 0, message: 'Error merging PDFs' })
    }
  }, [pdfFiles])

  const compressPdf = useCallback(async () => {
    if (pdfFiles.length === 0) return

    const pdfFile = pdfFiles[0]
    setStatus({
      isProcessing: true,
      progress: 50,
      message: 'Compressing PDF...'
    })

    try {
      const PDFLib = await import('pdf-lib')
      const arrayBuffer = await pdfFile.file.arrayBuffer()
      const pdf = await PDFLib.PDFDocument.load(arrayBuffer)

      // Simple compression by re-saving (pdf-lib handles basic optimization)
      const pdfBytes = await pdf.save({
        useObjectStreams: false,
        addDefaultPage: false,
      })

      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
      const compressedFileName = `${pdfFile.name.replace('.pdf', '')}_compressed.pdf`
      saveAs.saveAs(blob, compressedFileName)

      const originalSize = pdfFile.size
      const compressedSize = blob.size
      const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1)

      setStatus({ 
        isProcessing: false, 
        progress: 100, 
        message: `Compressed by ${compressionRatio}% (${formatBytes(originalSize)} → ${formatBytes(compressedSize)})` 
      })
    } catch (error) {
      console.error('Error compressing PDF:', error)
      setStatus({ isProcessing: false, progress: 0, message: 'Error compressing PDF' })
    }
  }, [pdfFiles])

  const convertToImages = useCallback(async () => {
    setStatus({
      isProcessing: false,
      progress: 0,
      message: 'PDF to images conversion is temporarily unavailable. We are working on implementing this feature with an alternative solution.'
    })
  }, [])

  // Tool selection
  const tools = [
    { id: 'split' as Tool, name: 'Split PDF', icon: '✂️' },
    { id: 'merge' as Tool, name: 'Merge PDFs', icon: '🔗' },
    { id: 'compress' as Tool, name: 'Compress', icon: '🗜️' },
    { id: 'convert' as Tool, name: 'Convert to Images', icon: '🖼️' }
  ]

  const executeAction = useCallback(() => {
    switch (activeTool) {
      case 'split':
        splitPdf()
        break
      case 'merge':
        mergePdfs()
        break
      case 'compress':
        compressPdf()
        break
      case 'convert':
        convertToImages()
        break
    }
  }, [activeTool, splitPdf, mergePdfs, compressPdf, convertToImages])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-deep-space text-white p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse text-electric-lime">Loading PDF Alchemy...</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-deep-space text-white p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-electric-lime">PDF Alchemy</h1>
          <p className="text-light-gray">Transform your PDFs with powerful processing tools</p>
        </div>

        {/* Tool Selection */}
        <div className="bg-charcoal rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Choose Your Tool</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  activeTool === tool.id
                    ? 'border-electric-lime bg-electric-lime/10 text-electric-lime'
                    : 'border-smoke hover:border-electric-lime text-white hover:text-electric-lime'
                }`}
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <div className="text-sm font-medium">{tool.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* File Upload Area */}
        <div
          className={`bg-charcoal rounded-lg border-2 border-dashed p-8 text-center transition-all ${
            dragActive ? 'border-electric-lime bg-electric-lime/5' : 'border-smoke hover:border-electric-lime'
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div className="space-y-4">
            <div className="text-4xl">📄</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Upload PDF Files</h3>
              <p className="text-light-gray mb-4">
                Drag and drop your PDF files here, or click to browse
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-electric-lime text-black font-semibold rounded-lg hover:bg-electric-lime/90 transition-colors"
              >
                Select Files
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>
        </div>

        {/* Status Display */}
        {status.message && (
          <div className="bg-charcoal rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Status</span>
              {status.isProcessing && (
                <span className="text-electric-lime text-sm">{status.progress.toFixed(0)}%</span>
              )}
            </div>
            {status.isProcessing && (
              <div className="w-full bg-smoke rounded-full h-2 mb-2">
                <div
                  className="bg-electric-lime h-2 rounded-full transition-all duration-300"
                  style={{ width: `${status.progress}%` }}
                />
              </div>
            )}
            <p className="text-sm text-light-gray">{status.message}</p>
          </div>
        )}

        {/* Uploaded Files List */}
        {pdfFiles.length > 0 && (
          <div className="bg-charcoal rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Uploaded Files ({pdfFiles.length})</h3>
            <div className="space-y-3">
              {pdfFiles.map((pdf) => (
                <div key={pdf.id} className="flex items-center justify-between bg-smoke rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📄</div>
                    <div>
                      <div className="font-medium text-sm">{pdf.name}</div>
                      <div className="text-xs text-light-gray">
                        {pdf.pages} pages • {formatBytes(pdf.size)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removePdfFile(pdf.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                    title="Remove file"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tool-Specific Controls */}
        {pdfFiles.length > 0 && (
          <div className="bg-charcoal rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              {tools.find(t => t.id === activeTool)?.name} Options
            </h3>
            
            {activeTool === 'split' && pdfFiles.length > 0 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Page Range</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      min="1"
                      max={pdfFiles[0].pages}
                      value={splitRange.start}
                      onChange={(e) => setSplitRange(prev => ({ ...prev, start: parseInt(e.target.value) || 1 }))}
                      className="w-20 px-3 py-2 bg-smoke border border-smoke rounded-lg text-white focus:border-electric-lime focus:outline-none"
                    />
                    <span className="text-light-gray">to</span>
                    <input
                      type="number"
                      min="1"
                      max={pdfFiles[0].pages}
                      value={splitRange.end}
                      onChange={(e) => setSplitRange(prev => ({ ...prev, end: parseInt(e.target.value) || 1 }))}
                      className="w-20 px-3 py-2 bg-smoke border border-smoke rounded-lg text-white focus:border-electric-lime focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-light-gray mt-1">
                    Total pages: {pdfFiles[0].pages}
                  </p>
                </div>
                
                {/* Page selector grid */}
                <div>
                  <label className="block text-sm font-medium mb-2">Or select specific pages:</label>
                  <div className="grid grid-cols-8 gap-2 max-h-40 overflow-y-auto">
                    {Array.from({ length: pdfFiles[0].pages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setSelectedPages(prev => 
                            prev.includes(pageNum) 
                              ? prev.filter(p => p !== pageNum)
                              : [...prev, pageNum].sort((a, b) => a - b)
                          )
                        }}
                        className={`w-10 h-10 text-xs rounded border transition-all ${
                          selectedPages.includes(pageNum)
                            ? 'bg-electric-lime text-black border-electric-lime'
                            : 'bg-smoke border-smoke hover:border-electric-lime text-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                  {selectedPages.length > 0 && (
                    <p className="text-xs text-electric-lime mt-2">
                      Selected pages: {selectedPages.join(', ')}
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeTool === 'merge' && (
              <div className="space-y-4">
                <p className="text-sm text-light-gray">
                  {pdfFiles.length < 2 
                    ? 'Upload at least 2 PDF files to merge them.' 
                    : `Ready to merge ${pdfFiles.length} PDF files in the order shown above.`
                  }
                </p>
              </div>
            )}

            {activeTool === 'compress' && (
              <div className="space-y-4">
                <p className="text-sm text-light-gray">
                  Compress your PDF to reduce file size while maintaining quality.
                </p>
              </div>
            )}

            {activeTool === 'convert' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Image Format</label>
                  <select
                    value={imageFormat}
                    onChange={(e) => setImageFormat(e.target.value as 'png' | 'jpg')}
                    className="w-32 px-3 py-2 bg-smoke border border-smoke rounded-lg text-white focus:border-electric-lime focus:outline-none"
                  >
                    <option value="png">PNG</option>
                    <option value="jpg">JPG</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Quality (DPI)</label>
                  <input
                    type="number"
                    min="72"
                    max="600"
                    step="1"
                    value={imageQuality}
                    onChange={(e) => setImageQuality(parseInt(e.target.value) || 300)}
                    className="w-32 px-3 py-2 bg-smoke border border-smoke rounded-lg text-white focus:border-electric-lime focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={executeAction}
                disabled={
                  status.isProcessing ||
                  pdfFiles.length === 0 ||
                  (activeTool === 'merge' && pdfFiles.length < 2) ||
                  (activeTool === 'split' && pdfFiles.length === 0)
                }
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  status.isProcessing ||
                  pdfFiles.length === 0 ||
                  (activeTool === 'merge' && pdfFiles.length < 2)
                    ? 'bg-smoke text-light-gray cursor-not-allowed'
                    : 'bg-electric-lime text-black hover:bg-electric-lime/90'
                }`}
              >
                {status.isProcessing 
                  ? 'Processing...' 
                  : `${tools.find(t => t.id === activeTool)?.name}`
                }
              </button>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-charcoal rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">How to Use</h3>
          <div className="space-y-3 text-sm text-light-gray">
            <div className="flex space-x-3">
              <span className="text-electric-lime font-mono">1.</span>
              <span>Choose a tool from the options above</span>
            </div>
            <div className="flex space-x-3">
              <span className="text-electric-lime font-mono">2.</span>
              <span>Upload your PDF files by dragging them into the upload area or clicking "Select Files"</span>
            </div>
            <div className="flex space-x-3">
              <span className="text-electric-lime font-mono">3.</span>
              <span>Configure the tool options (page ranges, compression settings, etc.)</span>
            </div>
            <div className="flex space-x-3">
              <span className="text-electric-lime font-mono">4.</span>
              <span>Click the action button to process your files</span>
            </div>
            <div className="flex space-x-3">
              <span className="text-electric-lime font-mono">5.</span>
              <span>Your processed files will automatically download</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
