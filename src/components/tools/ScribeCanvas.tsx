'use client'

import React, { useRef, useCallback, useState, useEffect } from 'react'
import * as saveAs from 'file-saver'

export default function ScribeCanvas() {
  const editorRef = useRef<HTMLDivElement>(null)
  const [content, setContent] = useState('')
  const [fileName, setFileName] = useState('document')
  const [isLoading, setIsLoading] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set())
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')
  const [linkText, setLinkText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [imageAlt, setImageAlt] = useState('')

  // Initialize editor content
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = '<p class="placeholder-text" style="color: #8E8E93; font-style: italic;">Start writing your masterpiece...</p>'
    }
  }, [])
  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = '<p class="placeholder-text" style="color: #8E8E93; font-style: italic;">Start writing your masterpiece...</p>'
    }
  }, [])

  // Update content and statistics
  const handleContentChange = useCallback(() => {
    if (editorRef.current) {
      const htmlContent = editorRef.current.innerHTML
      const textContent = editorRef.current.innerText || editorRef.current.textContent || ''
      
      // Remove placeholder if user starts typing
      const placeholder = editorRef.current.querySelector('.placeholder-text')
      if (placeholder && textContent.trim() && textContent.trim() !== 'Start writing your masterpiece...') {
        placeholder.remove()
      }
      
      setContent(htmlContent)
      
      // Calculate statistics (exclude placeholder text)
      const actualText = textContent.trim() === 'Start writing your masterpiece...' ? '' : textContent.trim()
      const words = actualText.split(/\s+/).filter(word => word.length > 0)
      setWordCount(words.length)
      setCharCount(actualText.length)

      // Update active formats
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const formats = new Set<string>()
        
        if (document.queryCommandState('bold')) formats.add('bold')
        if (document.queryCommandState('italic')) formats.add('italic')
        if (document.queryCommandState('underline')) formats.add('underline')
        if (document.queryCommandState('strikeThrough')) formats.add('strikeThrough')
        if (document.queryCommandState('insertOrderedList')) formats.add('insertOrderedList')
        if (document.queryCommandState('insertUnorderedList')) formats.add('insertUnorderedList')
        if (document.queryCommandState('justifyLeft')) formats.add('justifyLeft')
        if (document.queryCommandState('justifyCenter')) formats.add('justifyCenter')
        if (document.queryCommandState('justifyRight')) formats.add('justifyRight')
        
        setActiveFormats(formats)
      }
    }
  }, [])

  // Text formatting commands
  const formatText = useCallback((command: string, value?: string) => {
    if (editorRef.current) {
      // Remove placeholder before formatting
      const placeholder = editorRef.current.querySelector('.placeholder-text')
      if (placeholder) {
        placeholder.remove()
      }
      
      editorRef.current.focus()
      
      // Handle special cases for lists and blockquotes
      if (command === 'insertOrderedList') {
        // For ordered lists, use a more reliable approach
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          document.execCommand('insertOrderedList', false, undefined)
          // If that doesn't work, manually create the list
          setTimeout(() => {
            if (!document.queryCommandState('insertOrderedList')) {
              const range = selection.getRangeAt(0)
              const ol = document.createElement('ol')
              ol.style.paddingLeft = '20px'
              ol.style.marginLeft = '0'
              const li = document.createElement('li')
              li.innerHTML = range.toString() || '&nbsp;'
              ol.appendChild(li)
              range.deleteContents()
              range.insertNode(ol)
              
              // Place cursor in the list item
              range.setStart(li, 0)
              range.setEnd(li, 0)
              selection.removeAllRanges()
              selection.addRange(range)
            }
          }, 0)
        }
      } else if (command === 'insertUnorderedList') {
        // For unordered lists, use a more reliable approach
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          document.execCommand('insertUnorderedList', false, undefined)
          // If that doesn't work, manually create the list
          setTimeout(() => {
            if (!document.queryCommandState('insertUnorderedList')) {
              const range = selection.getRangeAt(0)
              const ul = document.createElement('ul')
              ul.style.paddingLeft = '20px'
              ul.style.marginLeft = '0'
              const li = document.createElement('li')
              li.innerHTML = range.toString() || '&nbsp;'
              ul.appendChild(li)
              range.deleteContents()
              range.insertNode(ul)
              
              // Place cursor in the list item
              range.setStart(li, 0)
              range.setEnd(li, 0)
              selection.removeAllRanges()
              selection.addRange(range)
            }
          }, 0)
        }
      } else if (command === 'formatBlock' && value === 'blockquote') {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          const blockquote = document.createElement('blockquote')
          blockquote.style.borderLeft = '4px solid #00FF88'
          blockquote.style.paddingLeft = '16px'
          blockquote.style.marginLeft = '0'
          blockquote.style.fontStyle = 'italic'
          
          try {
            range.surroundContents(blockquote)
          } catch (e) {
            // If surroundContents fails, try insertNode
            blockquote.appendChild(range.extractContents())
            range.insertNode(blockquote)
          }
        }
      } else {
        document.execCommand(command, false, value)
      }
      
      handleContentChange()
    }
  }, [handleContentChange])

  // Insert link
  const insertLink = useCallback(() => {
    setShowLinkModal(true)
  }, [])

  // Insert image
  const insertImage = useCallback(() => {
    setShowImageModal(true)
  }, [])

  // Handle link insertion
  const handleLinkInsert = useCallback(() => {
    if (linkUrl && editorRef.current) {
      editorRef.current.focus()
      
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const link = document.createElement('a')
        link.href = linkUrl
        link.textContent = linkText || linkUrl
        link.style.color = '#00FF88'
        link.style.textDecoration = 'underline'
        
        range.deleteContents()
        range.insertNode(link)
        
        // Place cursor after the link
        range.setStartAfter(link)
        range.setEndAfter(link)
        selection.removeAllRanges()
        selection.addRange(range)
      }
      
      setShowLinkModal(false)
      setLinkUrl('')
      setLinkText('')
      handleContentChange()
    }
  }, [linkUrl, linkText, handleContentChange])

  // Handle image insertion
  const handleImageInsert = useCallback(() => {
    if (imageUrl && editorRef.current) {
      editorRef.current.focus()
      
      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        const img = document.createElement('img')
        img.src = imageUrl
        img.alt = imageAlt || 'Inserted image'
        img.style.maxWidth = '100%'
        img.style.height = 'auto'
        img.style.borderRadius = '8px'
        img.style.margin = '8px 0'
        
        range.deleteContents()
        range.insertNode(img)
        
        // Place cursor after the image
        range.setStartAfter(img)
        range.setEndAfter(img)
        selection.removeAllRanges()
        selection.addRange(range)
      }
      
      setShowImageModal(false)
      setImageUrl('')
      setImageAlt('')
      handleContentChange()
    }
  }, [imageUrl, imageAlt, handleContentChange])

  // Clear content
  const clearContent = useCallback(() => {
    if (editorRef.current && confirm('Are you sure you want to clear all content?')) {
      editorRef.current.innerHTML = '<p class="placeholder-text" style="color: #8E8E93; font-style: italic;">Start writing your masterpiece...</p>'
      handleContentChange()
    }
  }, [handleContentChange])

  // Copy content to clipboard
  const copyToClipboard = useCallback(async () => {
    if (!editorRef.current) return

    try {
      setIsLoading(true)
      const textContent = editorRef.current.innerText || editorRef.current.textContent || ''
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textContent)
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = textContent
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
      }
      
      alert('Content copied to clipboard!')
    } catch (error) {
      alert('Failed to copy content to clipboard')
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Download functions
  const downloadAsText = useCallback(() => {
    if (!editorRef.current) return
    
    setIsLoading(true)
    const textContent = editorRef.current.innerText || editorRef.current.textContent || ''
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' })
    saveAs.saveAs(blob, `${fileName}.txt`)
    setIsLoading(false)
  }, [fileName])

  const downloadAsHTML = useCallback(() => {
    if (!editorRef.current) return
    
    setIsLoading(true)
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${fileName}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; max-width: 800px; }
        h1, h2, h3 { color: #333; }
        blockquote { border-left: 4px solid #ddd; margin: 20px 0; padding-left: 20px; font-style: italic; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
    ${content}
</body>
</html>`
    
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' })
    saveAs.saveAs(blob, `${fileName}.html`)
    setIsLoading(false)
  }, [fileName, content])

  const downloadAsMarkdown = useCallback(() => {
    if (!editorRef.current) return
    
    setIsLoading(true)
    // Simple HTML to Markdown conversion
    let markdown = content
      .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
      .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
      .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
      .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
      .replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**')
      .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
      .replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*')
      .replace(/<u[^>]*>(.*?)<\/u>/gi, '$1')
      .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
      .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gi, '> $1\n\n')
      .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
      .replace(/<br[^>]*\/?>/gi, '\n')
      .replace(/<div[^>]*>(.*?)<\/div>/gi, '$1\n')
      .replace(/<[^>]*>/g, '') // Remove any remaining HTML tags
      .replace(/\n\n+/g, '\n\n') // Clean up multiple newlines
      .trim()
    
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' })
    saveAs.saveAs(blob, `${fileName}.md`)
    setIsLoading(false)
  }, [fileName, content])

  const downloadAsRTF = useCallback(() => {
    if (!editorRef.current) return
    
    setIsLoading(true)
    const textContent = editorRef.current.innerText || editorRef.current.textContent || ''
    
    // Basic RTF format
    const rtfContent = `{\\rtf1\\ansi\\deff0 {\\fonttbl {\\f0 Times New Roman;}}
\\f0\\fs24 ${textContent.replace(/\n/g, '\\par\n')}
}`
    
    const blob = new Blob([rtfContent], { type: 'application/rtf' })
    saveAs.saveAs(blob, `${fileName}.rtf`)
    setIsLoading(false)
  }, [fileName])

  const downloadAsJSON = useCallback(() => {
    if (!editorRef.current) return
    
    setIsLoading(true)
    const textContent = editorRef.current.innerText || editorRef.current.textContent || ''
    
    const jsonData = {
      title: fileName,
      content: textContent,
      htmlContent: content,
      wordCount: wordCount,
      charCount: charCount,
      createdAt: new Date().toISOString(),
      format: 'ScribeCanvas Document'
    }
    
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' })
    saveAs.saveAs(blob, `${fileName}.json`)
    setIsLoading(false)
  }, [fileName, content, wordCount, charCount])

  return (
    <div className="max-w-6xl mx-auto bg-charcoal rounded-xl border border-smoke p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">ScribeCanvas</h2>
        <p className="text-light-gray">Your intuitive rich text editor for any writing task</p>
      </div>

      {/* Toolbar */}
      <div className="bg-smoke rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Text Formatting */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-electric-lime">Text Formatting</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => formatText('bold')}
                className={`px-3 py-1 rounded transition-colors text-sm font-bold ${
                  activeFormats.has('bold')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Bold"
              >
                B
              </button>
              <button
                onClick={() => formatText('italic')}
                className={`px-3 py-1 rounded transition-colors text-sm italic ${
                  activeFormats.has('italic')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Italic"
              >
                I
              </button>
              <button
                onClick={() => formatText('underline')}
                className={`px-3 py-1 rounded transition-colors text-sm underline ${
                  activeFormats.has('underline')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Underline"
              >
                U
              </button>
              <button
                onClick={() => formatText('strikeThrough')}
                className={`px-3 py-1 rounded transition-colors text-sm line-through ${
                  activeFormats.has('strikeThrough')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Strikethrough"
              >
                S
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => formatText('formatBlock', 'h1')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Heading 1"
              >
                H1
              </button>
              <button
                onClick={() => formatText('formatBlock', 'h2')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Heading 2"
              >
                H2
              </button>
              <button
                onClick={() => formatText('formatBlock', 'h3')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Heading 3"
              >
                H3
              </button>
              <button
                onClick={() => formatText('formatBlock', 'p')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Paragraph"
              >
                P
              </button>
            </div>
          </div>

          {/* Alignment & Lists */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-electric-lime">Alignment & Lists</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => formatText('justifyLeft')}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  activeFormats.has('justifyLeft')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Align Left"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('justifyCenter')}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  activeFormats.has('justifyCenter')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Center"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('justifyRight')}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  activeFormats.has('justifyRight')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Align Right"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('insertOrderedList')}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  activeFormats.has('insertOrderedList')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Numbered List"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('insertUnorderedList')}
                className={`px-3 py-1 rounded transition-colors text-sm ${
                  activeFormats.has('insertUnorderedList')
                    ? 'bg-electric-lime text-charcoal'
                    : 'bg-charcoal text-white hover:bg-electric-lime hover:text-charcoal'
                }`}
                title="Bullet List"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => formatText('indent')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Indent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21h18v-2H3v2zM3 8v8l4-4-4-4zm8 9h10v-2H11v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('outdent')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Outdent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 17h10v-2H11v2zm-8-5l4 4V8l-4 4zm0 9h18v-2H3v2zM3 3v2h18V3H3zm8 6h10V7H11v2zm0 4h10v-2H11v2z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('formatBlock', 'blockquote')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Quote"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Insert & Actions */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-electric-lime">Insert & Actions</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={insertLink}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Insert Link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
              </button>
              <button
                onClick={insertImage}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Insert Image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </button>
              <button
                onClick={() => formatText('insertHorizontalRule')}
                className="px-3 py-1 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm"
                title="Horizontal Line"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 11h16v2H4z"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={copyToClipboard}
                disabled={isLoading}
                className="px-3 py-1 bg-electric-lime text-charcoal rounded hover:bg-electric-lime/80 transition-colors text-sm font-medium disabled:opacity-50"
                title="Copy to Clipboard"
              >
                📋 Copy
              </button>
              <button
                onClick={clearContent}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                title="Clear All"
              >
                🗑️ Clear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Writing Area */}
      <div className="mb-6">
        <div className="bg-charcoal rounded-lg border-2 border-smoke min-h-96 overflow-auto">
          <div
            ref={editorRef}
            contentEditable
            onInput={handleContentChange}
            onKeyUp={handleContentChange}
            onMouseUp={handleContentChange}
            onSelect={handleContentChange}
            onFocus={(e) => {
              // Remove placeholder when focused and only contains placeholder
              const placeholder = e.currentTarget.querySelector('.placeholder-text')
              if (placeholder && e.currentTarget.textContent?.trim() === 'Start writing your masterpiece...') {
                placeholder.remove()
                // Add an empty paragraph for typing
                if (!e.currentTarget.innerHTML || e.currentTarget.innerHTML === '') {
                  e.currentTarget.innerHTML = '<p><br></p>'
                }
              }
            }}
            className="p-6 min-h-96 focus:outline-none text-white leading-relaxed"
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
            suppressContentEditableWarning={true}
          />
        </div>
      </div>

      {/* Stats and Download Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Document Stats */}
        <div className="bg-smoke rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Document Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-light-gray">
              <span>Words:</span>
              <span className="text-electric-lime font-semibold">{wordCount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-light-gray">
              <span>Characters:</span>
              <span className="text-electric-lime font-semibold">{charCount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-light-gray">
              <span>Reading Time:</span>
              <span className="text-electric-lime font-semibold">
                {Math.ceil(wordCount / 200)} min
              </span>
            </div>
          </div>
        </div>

        {/* Download Options */}
        <div className="bg-smoke rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-3">Download Document</h3>
          
          <div className="mb-3">
            <input
              type="text"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Document name"
              className="w-full px-3 py-2 bg-charcoal text-white rounded border border-gray-600 focus:border-electric-lime focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={downloadAsText}
              disabled={isLoading}
              className="px-3 py-2 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm disabled:opacity-50"
            >
              📄 .txt
            </button>
            <button
              onClick={downloadAsHTML}
              disabled={isLoading}
              className="px-3 py-2 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm disabled:opacity-50"
            >
              🌐 .html
            </button>
            <button
              onClick={downloadAsMarkdown}
              disabled={isLoading}
              className="px-3 py-2 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm disabled:opacity-50"
            >
              📝 .md
            </button>
            <button
              onClick={downloadAsRTF}
              disabled={isLoading}
              className="px-3 py-2 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm disabled:opacity-50"
            >
              📋 .rtf
            </button>
            <button
              onClick={downloadAsJSON}
              disabled={isLoading}
              className="px-3 py-2 bg-charcoal text-white rounded hover:bg-electric-lime hover:text-charcoal transition-colors text-sm disabled:opacity-50 col-span-2"
            >
              🔧 .json (with metadata)
            </button>
          </div>
        </div>
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-electric-lime">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-electric-lime"></div>
            <span>Processing...</span>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-charcoal rounded-xl border border-smoke p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">Insert Link</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">URL</label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 bg-smoke text-white rounded border border-gray-600 focus:border-electric-lime focus:outline-none"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">
                  Link Text (optional)
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Click here"
                  className="w-full px-3 py-2 bg-smoke text-white rounded border border-gray-600 focus:border-electric-lime focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleLinkInsert}
                disabled={!linkUrl}
                className="flex-1 bg-electric-lime text-charcoal font-semibold py-2 px-4 rounded hover:bg-electric-lime/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insert Link
              </button>
              <button
                onClick={() => {
                  setShowLinkModal(false)
                  setLinkUrl('')
                  setLinkText('')
                }}
                className="flex-1 bg-smoke text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-charcoal rounded-xl border border-smoke p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-white mb-4">Insert Image</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 bg-smoke text-white rounded border border-gray-600 focus:border-electric-lime focus:outline-none"
                  autoFocus
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">
                  Alt Text (optional)
                </label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Description of the image"
                  className="w-full px-3 py-2 bg-smoke text-white rounded border border-gray-600 focus:border-electric-lime focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleImageInsert}
                disabled={!imageUrl}
                className="flex-1 bg-electric-lime text-charcoal font-semibold py-2 px-4 rounded hover:bg-electric-lime/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Insert Image
              </button>
              <button
                onClick={() => {
                  setShowImageModal(false)
                  setImageUrl('')
                  setImageAlt('')
                }}
                className="flex-1 bg-smoke text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
