'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import types only
interface PDFFile {
  id: string
  name: string
  file: File
  pages: number
  size: string
  preview?: string
}

interface ProcessingStatus {
  isProcessing: boolean
  progress: number
  operation: string
  message: string
}

type Tool = 'split' | 'merge' | 'compress' | 'convert' | 'pages' | 'info'

function PDFAlchemy() {
  const [activeTool, setActiveTool] = useState<Tool>('split')
  const [pdfFiles, setPdfFiles] = useState<PDFFile[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<ProcessingStatus>({
    isProcessing: false,
    progress: 0,
    operation: '',
    message: ''
  })
  const [selectedPages, setSelectedPages] = useState<number[]>([])
  const [splitRange, setSplitRange] = useState({ start: 1, end: 1 })
  const [compressionLevel, setCompressionLevel] = useState(0.7)
  const [imageFormat, setImageFormat] = useState<'png' | 'jpg'>('png')
  const [imageQuality, setImageQuality] = useState(300) // DPI
  const [isClient, setIsClient] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Initialize client-side libraries
  useEffect(() => {
    setIsClient(true)
  }, [])

  // File handling
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
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
    if (!isClient) return
    
    setStatus({
      isProcessing: true,
      progress: 0,
      operation: 'Loading PDFs',
      message: 'Analyzing PDF files...'
    })

    try {
      const { PDFDocument } = await import('pdf-lib')

      const newPdfFiles: PDFFile[] = []
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setStatus(prev => ({
          ...prev,
          progress: (i / files.length) * 100,
          message: `Processing ${file.name}...`
        }))

        // Get PDF info
        const arrayBuffer = await file.arrayBuffer()
        const pdfDoc = await PDFDocument.load(arrayBuffer)
        const pageCount = pdfDoc.getPageCount()

        newPdfFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          file,
          pages: pageCount,
          size: formatFileSize(file.size),
          // Remove preview for now to avoid PDF.js issues
          preview: undefined
        })
      }

      setPdfFiles(prev => [...prev, ...newPdfFiles])
      
      if (newPdfFiles.length === 1) {
        setSplitRange({ start: 1, end: newPdfFiles[0].pages })
      }
      
    } catch (error) {
      console.error('Error processing PDFs:', error)
      setStatus(prev => ({ ...prev, message: 'Error processing PDF files' }))
    } finally {
      setStatus(prev => ({ ...prev, isProcessing: false, progress: 0 }))
    }
  }, [isClient])

  // Utility functions
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const removePdfFile = useCallback((id: string) => {
    setPdfFiles(prev => prev.filter(pdf => pdf.id !== id))
    if (pdfFiles.length === 1) {
      setSelectedPages([])
      setSplitRange({ start: 1, end: 1 })
    }
  }, [pdfFiles.length])

  // PDF Operations
  const splitPDF = useCallback(async () => {
    if (pdfFiles.length === 0 || !isClient) return

    const pdfFile = pdfFiles[0]
    setStatus({
      isProcessing: true,
      progress: 0,
      operation: 'Splitting PDF',
      message: 'Preparing to split...'
    })

    try {
      const [{ PDFDocument }, { saveAs }] = await Promise.all([
        import('pdf-lib'),
        import('file-saver')
      ])

      const arrayBuffer = await pdfFile.file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)
      const totalPages = pdfDoc.getPageCount()

      // Split by range or individual pages
      if (selectedPages.length > 0) {
        // Split selected pages
        for (let i = 0; i < selectedPages.length; i++) {
          const pageNum = selectedPages[i] - 1
          setStatus(prev => ({
            ...prev,
            progress: (i / selectedPages.length) * 100,
            message: `Extracting page ${selectedPages[i]}...`
          }))

          const newPdf = await PDFDocument.create()
          const [copiedPage] = await newPdf.copyPages(pdfDoc, [pageNum])
          newPdf.addPage(copiedPage)

          const pdfBytes = await newPdf.save()
          const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
          saveAs.saveAs(blob, `${pdfFile.name.replace('.pdf', '')}_page_${selectedPages[i]}.pdf`)
        }
      } else {
        // Split by range
        const start = Math.max(1, splitRange.start) - 1
        const end = Math.min(totalPages, splitRange.end)
        
        for (let i = start; i < end; i++) {
          setStatus(prev => ({
            ...prev,
            progress: ((i - start + 1) / (end - start)) * 100,
            message: `Extracting page ${i + 1}...`
          }))

          const newPdf = await PDFDocument.create()
          const [copiedPage] = await newPdf.copyPages(pdfDoc, [i])
          newPdf.addPage(copiedPage)

          const pdfBytes = await newPdf.save()
          const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
          saveAs.saveAs(blob, `${pdfFile.name.replace('.pdf', '')}_page_${i + 1}.pdf`)
        }
      }

      setStatus(prev => ({ ...prev, message: 'Split completed successfully!' }))
    } catch (error) {
      console.error('Error splitting PDF:', error)
      setStatus(prev => ({ ...prev, message: 'Error splitting PDF' }))
    } finally {
      setTimeout(() => {
        setStatus({ isProcessing: false, progress: 0, operation: '', message: '' })
      }, 2000)
    }
  }, [pdfFiles, selectedPages, splitRange, isClient])

  const mergePDFs = useCallback(async () => {
    if (pdfFiles.length < 2 || !isClient) return

    setStatus({
      isProcessing: true,
      progress: 0,
      operation: 'Merging PDFs',
      message: 'Creating merged document...'
    })

    try {
      const [{ PDFDocument }, { saveAs }] = await Promise.all([
        import('pdf-lib'),
        import('file-saver')
      ])

      const mergedPdf = await PDFDocument.create()

      for (let i = 0; i < pdfFiles.length; i++) {
        setStatus(prev => ({
          ...prev,
          progress: (i / pdfFiles.length) * 100,
          message: `Adding ${pdfFiles[i].name}...`
        }))

        const arrayBuffer = await pdfFiles[i].file.arrayBuffer()
        const pdfDoc = await PDFDocument.load(arrayBuffer)
        const pageIndices = pdfDoc.getPageIndices()
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pageIndices)
        copiedPages.forEach((page: any) => mergedPdf.addPage(page))
      }

      const pdfBytes = await mergedPdf.save()
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
      saveAs.saveAs(blob, 'merged_document.pdf')

      setStatus(prev => ({ ...prev, message: 'PDFs merged successfully!' }))
    } catch (error) {
      console.error('Error merging PDFs:', error)
      setStatus(prev => ({ ...prev, message: 'Error merging PDFs' }))
    } finally {
      setTimeout(() => {
        setStatus({ isProcessing: false, progress: 0, operation: '', message: '' })
      }, 2000)
    }
  }, [pdfFiles, isClient])

  const compressPDF = useCallback(async () => {
    if (pdfFiles.length === 0 || !isClient) return

    const pdfFile = pdfFiles[0]
    setStatus({
      isProcessing: true,
      progress: 50,
      operation: 'Compressing PDF',
      message: 'Optimizing document...'
    })

    try {
      const [{ PDFDocument }, { saveAs }] = await Promise.all([
        import('pdf-lib'),
        import('file-saver')
      ])

      const arrayBuffer = await pdfFile.file.arrayBuffer()
      const pdfDoc = await PDFDocument.load(arrayBuffer)

      // Basic compression by re-saving
      const pdfBytes = await pdfDoc.save({
        useObjectStreams: false,
        addDefaultPage: false,
      })

      const originalSize = pdfFile.file.size
      const compressedSize = pdfBytes.length
      const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1)

      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' })
      saveAs.saveAs(blob, `${pdfFile.name.replace('.pdf', '')}_compressed.pdf`)

      setStatus(prev => ({ 
        ...prev, 
        progress: 100,
        message: `Compressed successfully! Reduced by ${compressionRatio}%` 
      }))
    } catch (error) {
      console.error('Error compressing PDF:', error)
      setStatus(prev => ({ ...prev, message: 'Error compressing PDF' }))
    } finally {
      setTimeout(() => {
        setStatus({ isProcessing: false, progress: 0, operation: '', message: '' })
      }, 2000)
    }
  }, [pdfFiles, isClient])

  const convertToImages = useCallback(async () => {
    if (pdfFiles.length === 0 || !isClient) return

    const pdfFile = pdfFiles[0]
    setStatus({
      isProcessing: true,
      progress: 0,
      operation: 'Converting to Images',
      message: 'This feature requires additional setup...'
    })

    try {
      // For now, show a message that this feature needs additional configuration
      setStatus(prev => ({ 
        ...prev, 
        progress: 100,
        message: 'Image conversion feature will be available soon. Use Split/Merge/Compress for now.' 
      }))
    } catch (error) {
      console.error('Error converting PDF to images:', error)
      setStatus(prev => ({ ...prev, message: 'Error converting PDF' }))
    } finally {
      setTimeout(() => {
        setStatus({ isProcessing: false, progress: 0, operation: '', message: '' })
      }, 3000)
    }
  }, [pdfFiles, imageFormat, imageQuality, isClient])

  // Page selection handlers
  const togglePageSelection = useCallback((pageNum: number) => {
    setSelectedPages(prev => 
      prev.includes(pageNum) 
        ? prev.filter(p => p !== pageNum)
        : [...prev, pageNum].sort((a, b) => a - b)
    )
  }, [])

  const selectAllPages = useCallback(() => {
    if (pdfFiles.length > 0) {
      const allPages = Array.from({ length: pdfFiles[0].pages }, (_, i) => i + 1)
      setSelectedPages(allPages)
    }
  }, [pdfFiles])

  const clearSelection = useCallback(() => {
    setSelectedPages([])
  }, [])

  if (!isClient) {
    return (
      <div className="bg-charcoal/30 rounded-3xl p-8 backdrop-blur-sm border border-smoke/20">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-2 border-electric-lime border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-light-gray">Loading PDF toolkit...</span>
        </div>
      </div>
    )
  }

  // Tool definitions
  const tools = [
    { id: 'split' as Tool, name: 'Split PDF', icon: '✂️', desc: 'Split PDF into pages or ranges' },
    { id: 'merge' as Tool, name: 'Merge PDFs', icon: '🔗', desc: 'Combine multiple PDFs' },
    { id: 'compress' as Tool, name: 'Compress', icon: '🗜️', desc: 'Reduce file size' },
    { id: 'convert' as Tool, name: 'To Images', icon: '🖼️', desc: 'Convert to PNG/JPG' },
    { id: 'pages' as Tool, name: 'Manage Pages', icon: '📄', desc: 'Add, remove, reorder pages' },
    { id: 'info' as Tool, name: 'PDF Info', icon: 'ℹ️', desc: 'View PDF properties' }
  ]

  return (
    <div className="bg-charcoal/30 rounded-3xl p-8 backdrop-blur-sm border border-smoke/20">
      {/* Tool Selection */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {tools.map((tool) => (
          <motion.button
            key={tool.id}
            onClick={() => setActiveTool(tool.id)}
            className={`p-4 rounded-2xl text-center transition-all duration-300 border-2 ${
              activeTool === tool.id
                ? 'bg-electric-lime/20 border-electric-lime text-electric-lime'
                : 'bg-charcoal/50 border-smoke/30 text-light-gray hover:border-electric-lime/50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl mb-2">{tool.icon}</div>
            <div className="font-medium text-sm">{tool.name}</div>
            <div className="text-xs opacity-70">{tool.desc}</div>
          </motion.button>
        ))}
      </div>

      {/* File Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8 mb-6 transition-all duration-300 ${
          dragActive
            ? 'border-electric-lime bg-electric-lime/10'
            : 'border-smoke/30 bg-charcoal/20 hover:border-electric-lime/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="text-center">
          <div className="text-4xl mb-4">📄</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Drop PDF files here or click to browse
          </h3>
          <p className="text-light-gray">
            {activeTool === 'merge' ? 'Upload multiple PDFs to merge' : 'Upload PDF files to process'}
          </p>
        </div>
      </div>

      {/* Processing Status */}
      <AnimatePresence>
        {status.isProcessing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-charcoal/50 rounded-2xl p-6 mb-6 border border-smoke/20"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-electric-lime font-medium">{status.operation}</span>
              <span className="text-light-gray">{Math.round(status.progress)}%</span>
            </div>
            <div className="w-full bg-smoke/20 rounded-full h-2 mb-2">
              <div
                className="bg-electric-lime h-2 rounded-full transition-all duration-300"
                style={{ width: `${status.progress}%` }}
              />
            </div>
            <p className="text-light-gray text-sm">{status.message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Uploaded Files */}
      {pdfFiles.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Uploaded Files</h3>
          <div className="space-y-3">
            {pdfFiles.map((pdf) => (
              <div
                key={pdf.id}
                className="flex items-center gap-4 p-4 bg-charcoal/50 rounded-2xl border border-smoke/20"
              >
                <div className="w-12 h-16 flex items-center justify-center bg-charcoal/80 rounded border border-smoke/30">
                  <span className="text-2xl">📄</span>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{pdf.name}</div>
                  <div className="text-sm text-light-gray">
                    {pdf.pages} pages • {pdf.size}
                  </div>
                </div>
                <button
                  onClick={() => removePdfFile(pdf.id)}
                  className="p-2 text-red-400 hover:text-red-300 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Message for no PDF operations yet */}
      {pdfFiles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔧</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            PDF Alchemy Toolkit
          </h3>
          <p className="text-light-gray">
            Upload PDF files to start using the comprehensive PDF manipulation tools
          </p>
        </div>
      )}

      {/* Tool-specific controls */}
      {pdfFiles.length > 0 && (
        <div className="space-y-6">
          {/* Split Tool Controls */}
          {activeTool === 'split' && (
            <div className="bg-charcoal/50 rounded-2xl p-6 border border-smoke/20">
              <h4 className="text-lg font-semibold text-white mb-4">Split Options</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Page Range */}
                <div>
                  <label className="block text-light-gray mb-2">Page Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="1"
                      max={pdfFiles[0]?.pages || 1}
                      value={splitRange.start}
                      onChange={(e) => setSplitRange(prev => ({ ...prev, start: parseInt(e.target.value) || 1 }))}
                      className="w-20 px-3 py-2 bg-charcoal border border-smoke/30 rounded-lg text-white"
                      placeholder="From"
                    />
                    <span className="text-light-gray flex items-center">to</span>
                    <input
                      type="number"
                      min="1"
                      max={pdfFiles[0]?.pages || 1}
                      value={splitRange.end}
                      onChange={(e) => setSplitRange(prev => ({ ...prev, end: parseInt(e.target.value) || 1 }))}
                      className="w-20 px-3 py-2 bg-charcoal border border-smoke/30 rounded-lg text-white"
                      placeholder="To"
                    />
                  </div>
                </div>

                {/* Individual Pages */}
                <div>
                  <label className="block text-light-gray mb-2">Or Select Individual Pages</label>
                  <div className="flex gap-2 mb-2">
                    <button
                      onClick={selectAllPages}
                      className="px-3 py-1 bg-electric-lime/20 text-electric-lime rounded-lg text-sm hover:bg-electric-lime/30 transition-colors"
                    >
                      Select All
                    </button>
                    <button
                      onClick={clearSelection}
                      className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm hover:bg-red-500/30 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                    {Array.from({ length: pdfFiles[0]?.pages || 0 }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => togglePageSelection(pageNum)}
                        className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                          selectedPages.includes(pageNum)
                            ? 'bg-electric-lime text-charcoal'
                            : 'bg-charcoal border border-smoke/30 text-light-gray hover:border-electric-lime/50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                  </div>
                  {selectedPages.length > 0 && (
                    <p className="text-xs text-light-gray mt-2">
                      Selected: {selectedPages.join(', ')}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={splitPDF}
                disabled={status.isProcessing}
                className="w-full mt-6 px-6 py-3 bg-electric-lime text-charcoal font-semibold rounded-2xl hover:bg-electric-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Split PDF
              </button>
            </div>
          )}

          {/* Merge Tool Controls */}
          {activeTool === 'merge' && (
            <div className="bg-charcoal/50 rounded-2xl p-6 border border-smoke/20">
              <h4 className="text-lg font-semibold text-white mb-4">Merge Options</h4>
              <p className="text-light-gray mb-4">
                {pdfFiles.length} files will be merged in the order shown above.
              </p>
              <button
                onClick={mergePDFs}
                disabled={status.isProcessing || pdfFiles.length < 2}
                className="w-full px-6 py-3 bg-electric-lime text-charcoal font-semibold rounded-2xl hover:bg-electric-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Merge PDFs
              </button>
            </div>
          )}

          {/* Compress Tool Controls */}
          {activeTool === 'compress' && (
            <div className="bg-charcoal/50 rounded-2xl p-6 border border-smoke/20">
              <h4 className="text-lg font-semibold text-white mb-4">Compression Options</h4>
              <p className="text-light-gray mb-4">
                Reduce file size by optimizing the PDF structure.
              </p>
              <button
                onClick={compressPDF}
                disabled={status.isProcessing}
                className="w-full px-6 py-3 bg-electric-lime text-charcoal font-semibold rounded-2xl hover:bg-electric-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compress PDF
              </button>
            </div>
          )}

          {/* Convert Tool Controls */}
          {activeTool === 'convert' && (
            <div className="bg-charcoal/50 rounded-2xl p-6 border border-smoke/20">
              <h4 className="text-lg font-semibold text-white mb-4">Conversion Options</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-light-gray mb-2">Image Format</label>
                  <select
                    value={imageFormat}
                    onChange={(e) => setImageFormat(e.target.value as 'png' | 'jpg')}
                    className="w-full px-3 py-2 bg-charcoal border border-smoke/30 rounded-lg text-white"
                  >
                    <option value="png">PNG (Lossless)</option>
                    <option value="jpg">JPG (Smaller size)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-light-gray mb-2">Quality (DPI)</label>
                  <select
                    value={imageQuality}
                    onChange={(e) => setImageQuality(parseInt(e.target.value))}
                    className="w-full px-3 py-2 bg-charcoal border border-smoke/30 rounded-lg text-white"
                  >
                    <option value={150}>150 DPI (Low)</option>
                    <option value={300}>300 DPI (High)</option>
                    <option value={600}>600 DPI (Print Quality)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={convertToImages}
                disabled={status.isProcessing}
                className="w-full px-6 py-3 bg-electric-lime text-charcoal font-semibold rounded-2xl hover:bg-electric-lime/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Convert to Images
              </button>
            </div>
          )}

          {/* Placeholder for other tools */}
          {(activeTool === 'pages' || activeTool === 'info') && (
            <div className="bg-charcoal/50 rounded-2xl p-6 border border-smoke/20">
              <h4 className="text-lg font-semibold text-white mb-4">
                {activeTool === 'pages' ? 'Page Management' : 'PDF Information'}
              </h4>
              <p className="text-light-gray">
                {activeTool === 'pages'
                  ? 'Advanced page management features coming soon!'
                  : 'Detailed PDF information display coming soon!'
                }
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PDFAlchemy
