'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Color {
  hex: string
  rgb: string
  hsl: string
  frequency: number
}

interface HoverColor {
  hex: string
  rgb: string
  hsl: string
  x: number
  y: number
}

export default function ChromaCaptureExtractor() {
  const [dragActive, setDragActive] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [extractedColors, setExtractedColors] = useState<Color[]>([])
  const [hoverColor, setHoverColor] = useState<HoverColor | null>(null)
  const [isExtracting, setIsExtracting] = useState(false)
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [copiedColor, setCopiedColor] = useState<string>('')
  
  const fileInputRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hoverCanvasRef = useRef<HTMLCanvasElement>(null)

  // Handle file drag and drop
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
    
    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }, [])

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file.')
      return
    }

    setImageFile(file)
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setExtractedColors([])
    setHoverColor(null)
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files[0]) {
      handleFile(files[0])
    }
  }, [handleFile])

  // Extract top 5 colors from image
  const extractColors = useCallback(async () => {
    if (!imageUrl || !canvasRef.current) return

    setIsExtracting(true)
    
    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = new Image()
      img.crossOrigin = 'anonymous'
      
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = imageUrl
      })

      // Set canvas size to image size
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      // Color frequency map
      const colorMap = new Map<string, number>()

      // Sample pixels (skip some for performance)
      const step = 4
      for (let i = 0; i < data.length; i += step * 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const a = data[i + 3]

        // Skip transparent pixels
        if (a < 128) continue

        // Round colors to reduce noise
        const roundedR = Math.round(r / 10) * 10
        const roundedG = Math.round(g / 10) * 10
        const roundedB = Math.round(b / 10) * 10

        const colorKey = `${roundedR},${roundedG},${roundedB}`
        colorMap.set(colorKey, (colorMap.get(colorKey) || 0) + 1)
      }

      // Sort colors by frequency and get top 5
      const sortedColors = Array.from(colorMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([colorKey, frequency]) => {
          const [r, g, b] = colorKey.split(',').map(Number)
          return {
            hex: rgbToHex(r, g, b),
            rgb: `rgb(${r}, ${g}, ${b})`,
            hsl: rgbToHsl(r, g, b),
            frequency
          }
        })

      setExtractedColors(sortedColors)
    } catch (error) {
      console.error('Error extracting colors:', error)
    } finally {
      setIsExtracting(false)
    }
  }, [imageUrl])

  // Handle mouse movement over image for color detection
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !hoverCanvasRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - position.x) / scale
    const y = (e.clientY - rect.top - position.y) / scale

    const canvas = hoverCanvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = imageRef.current
    if (x >= 0 && y >= 0 && x < img.naturalWidth && y < img.naturalHeight) {
      // Draw image to canvas if not already done
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        ctx.drawImage(img, 0, 0)
      }

      // Get pixel color
      const imageData = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1)
      const [r, g, b] = imageData.data

      setHoverColor({
        hex: rgbToHex(r, g, b),
        rgb: `rgb(${r}, ${g}, ${b})`,
        hsl: rgbToHsl(r, g, b),
        x: e.clientX,
        y: e.clientY
      })
    }
  }, [scale, position])

  // Handle mouse enter/leave for scroll prevention
  const handleMouseEnter = useCallback(() => {
    // Prevent body scroll when hovering over image
    document.body.style.overflow = 'hidden'
  }, [])

  const handleMouseLeaveContainer = useCallback(() => {
    setHoverColor(null)
    // Re-enable body scroll when leaving image container
    document.body.style.overflow = 'auto'
  }, [])

  // Handle zoom with scroll wheel
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const zoom = e.deltaY > 0 ? 0.9 : 1.1
    const newScale = Math.max(0.5, Math.min(5, scale * zoom))
    
    if (newScale !== scale) {
      const scaleDiff = newScale / scale
      
      setPosition(prev => ({
        x: centerX - (centerX - prev.x) * scaleDiff + (centerX - mouseX) * (scaleDiff - 1),
        y: centerY - (centerY - prev.y) * scaleDiff + (centerY - mouseY) * (scaleDiff - 1)
      }))
      setScale(newScale)
    }
  }, [scale])

  // Copy color to clipboard
  const copyColor = useCallback(async (color: string, format: string) => {
    try {
      await navigator.clipboard.writeText(color)
      setCopiedColor(`${format}: ${color}`)
      setTimeout(() => setCopiedColor(''), 2000)
    } catch (error) {
      console.error('Failed to copy color:', error)
    }
  }, [])

  // Extract colors when image loads
  useEffect(() => {
    if (imageUrl) {
      extractColors()
    }
  }, [imageUrl, extractColors])

  // Cleanup: Re-enable scroll on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // Utility functions
  function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }

  function rgbToHsl(r: number, g: number, b: number): string {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h: number, s: number, l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break
        case g: h = (b - r) / d + 2; break
        case b: h = (r - g) / d + 4; break
        default: h = 0
      }
      h /= 6
    }

    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
  }

  return (
    <div className="bg-charcoal/30 rounded-3xl p-8 backdrop-blur-sm border border-smoke/20">
      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragActive
            ? 'border-electric-lime bg-electric-lime/5'
            : 'border-smoke hover:border-electric-lime/50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {!imageUrl ? (
          <div className="space-y-4">
            <div className="w-20 h-20 bg-electric-lime/10 rounded-2xl flex items-center justify-center mx-auto">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-electric-lime">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
              </svg>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Upload Your Image</p>
              <p className="text-light-gray">Drag and drop an image here, or click to browse</p>
              <p className="text-sm text-light-gray mt-2">Supports JPG, PNG, GIF, WebP</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-light-gray">Click to upload a different image</p>
          </div>
        )}
      </div>

      {/* Image Viewer and Color Extraction */}
      {imageUrl && (
        <div className="mt-8 space-y-6">
          {/* Image Container */}
          <div 
            ref={containerRef}
            className="relative bg-smoke/30 rounded-2xl overflow-hidden h-96 cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeaveContainer}
            onWheel={handleWheel}
          >
            <img
              ref={imageRef}
              src={imageUrl}
              alt="Uploaded image for color extraction"
              className="absolute transition-transform duration-200 select-none"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: '0 0'
              }}
              onLoad={() => {
                // Center the image initially
                const container = containerRef.current
                const img = imageRef.current
                if (container && img) {
                  const containerRect = container.getBoundingClientRect()
                  const imgRect = img.getBoundingClientRect()
                  setPosition({
                    x: (containerRect.width - imgRect.width) / 2,
                    y: (containerRect.height - imgRect.height) / 2
                  })
                }
              }}
            />
            
            {/* Zoom indicator */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
              {Math.round(scale * 100)}%
            </div>
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-2 rounded-lg text-sm">
              <div>Hover: Detect color</div>
              <div>Scroll: Zoom in/out</div>
            </div>
          </div>

          {/* Hover Color Display */}
          <AnimatePresence>
            {hoverColor && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="fixed z-50 bg-black/90 text-white p-4 rounded-lg shadow-xl pointer-events-none"
                style={{
                  left: hoverColor.x + 20,
                  top: hoverColor.y - 80
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded border-2 border-white/20"
                    style={{ backgroundColor: hoverColor.hex }}
                  />
                  <div className="text-sm">
                    <div className="font-medium">{hoverColor.hex}</div>
                    <div className="text-gray-300">{hoverColor.rgb}</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Extracted Colors */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Top 5 Colors</h3>
              {isExtracting && (
                <div className="flex items-center gap-2 text-electric-lime">
                  <div className="w-4 h-4 border-2 border-electric-lime border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Extracting colors...</span>
                </div>
              )}
            </div>

            {extractedColors.length > 0 && (
              <div className="grid gap-4">
                {extractedColors.map((color, index) => (
                  <motion.div
                    key={color.hex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-smoke/30 rounded-xl p-4 border border-smoke/20"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-16 h-16 rounded-xl border-2 border-white/10 flex-shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      
                      <div className="flex-1 grid md:grid-cols-3 gap-4">
                        <div className="space-y-1">
                          <div className="text-sm text-light-gray">HEX</div>
                          <button
                            onClick={() => copyColor(color.hex, 'HEX')}
                            className="text-left font-mono text-sm bg-black/20 px-3 py-2 rounded-lg hover:bg-black/40 transition-colors w-full"
                          >
                            {color.hex}
                          </button>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm text-light-gray">RGB</div>
                          <button
                            onClick={() => copyColor(color.rgb, 'RGB')}
                            className="text-left font-mono text-sm bg-black/20 px-3 py-2 rounded-lg hover:bg-black/40 transition-colors w-full"
                          >
                            {color.rgb}
                          </button>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-sm text-light-gray">HSL</div>
                          <button
                            onClick={() => copyColor(color.hsl, 'HSL')}
                            className="text-left font-mono text-sm bg-black/20 px-3 py-2 rounded-lg hover:bg-black/40 transition-colors w-full"
                          >
                            {color.hsl}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Copy Success Message */}
          <AnimatePresence>
            {copiedColor && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed bottom-8 right-8 bg-electric-lime text-deep-space px-4 py-2 rounded-lg font-medium shadow-xl"
              >
                Copied: {copiedColor}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Hidden canvases for processing */}
      <canvas ref={canvasRef} className="hidden" />
      <canvas ref={hoverCanvasRef} className="hidden" />
    </div>
  )
}
