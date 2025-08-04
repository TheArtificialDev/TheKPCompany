'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import QRCode from 'qrcode'

interface QRCodeOptions {
  text: string
  size: number
  fgColor: string
  bgColor: string
  cornerRadius: number
  logo?: File | null
  logoSize: number
}

export default function QRCodeGenerator() {
  const [options, setOptions] = useState<QRCodeOptions>({
    text: '',
    size: 256,
    fgColor: '#000000',
    bgColor: '#ffffff',
    cornerRadius: 0,
    logo: null,
    logoSize: 20
  })
  
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [logoPreview, setLogoPreview] = useState<string>('')
  const [downloadMessage, setDownloadMessage] = useState<string>('')
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logoInputRef = useRef<HTMLInputElement>(null)

  // Generate QR code using qrcode library
  const drawQRCode = useCallback(async () => {
    if (!options.text.trim() || !canvasRef.current) return

    setIsGenerating(true)
    
    try {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      // Set canvas size
      canvas.width = options.size
      canvas.height = options.size

      // Generate QR code
      await QRCode.toCanvas(canvas, options.text, {
        width: options.size,
        margin: 2,
        color: {
          dark: options.fgColor,
          light: options.bgColor
        },
        errorCorrectionLevel: 'M'
      })

      // Apply rounded corners if specified
      if (options.cornerRadius > 0) {
        const imageData = ctx.getImageData(0, 0, options.size, options.size)
        ctx.clearRect(0, 0, options.size, options.size)
        
        // Draw background with rounded corners
        ctx.fillStyle = options.bgColor
        ctx.beginPath()
        ctx.roundRect(0, 0, options.size, options.size, options.cornerRadius)
        ctx.fill()
        
        // Create clipping mask for rounded corners
        ctx.save()
        ctx.beginPath()
        ctx.roundRect(0, 0, options.size, options.size, options.cornerRadius)
        ctx.clip()
        
        // Put back the QR code image data
        ctx.putImageData(imageData, 0, 0)
        ctx.restore()
      }

      // Add logo if provided
      if (options.logo && logoPreview) {
        const logoImg = new Image()
        logoImg.crossOrigin = 'anonymous'
        
        await new Promise((resolve, reject) => {
          logoImg.onload = resolve
          logoImg.onerror = reject
          logoImg.src = logoPreview
        })

        const logoSizePixels = (options.size * options.logoSize) / 100
        const logoX = (options.size - logoSizePixels) / 2
        const logoY = (options.size - logoSizePixels) / 2

        // Create white background circle for logo
        ctx.fillStyle = options.bgColor
        ctx.beginPath()
        ctx.arc(logoX + logoSizePixels/2, logoY + logoSizePixels/2, logoSizePixels/2 + 8, 0, 2 * Math.PI)
        ctx.fill()

        // Create circular clipping mask for logo
        ctx.save()
        ctx.beginPath()
        ctx.arc(logoX + logoSizePixels/2, logoY + logoSizePixels/2, logoSizePixels/2, 0, 2 * Math.PI)
        ctx.clip()
        
        // Draw logo
        ctx.drawImage(logoImg, logoX, logoY, logoSizePixels, logoSizePixels)
        ctx.restore()
      }

      // Convert to data URL
      const dataUrl = canvas.toDataURL('image/png')
      setQrCodeDataUrl(dataUrl)
      
    } catch (error) {
      console.error('Error generating QR code:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [options, logoPreview])

  // Handle logo upload
  const handleLogoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setOptions(prev => ({ ...prev, logo: file }))
      
      const reader = new FileReader()
      reader.onload = (event) => {
        setLogoPreview(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  // Remove logo
  const removeLogo = useCallback(() => {
    setOptions(prev => ({ ...prev, logo: null }))
    setLogoPreview('')
    if (logoInputRef.current) {
      logoInputRef.current.value = ''
    }
  }, [])

  // Download QR code
  const downloadQRCode = useCallback((format: 'png' | 'jpg') => {
    if (!qrCodeDataUrl) return

    const canvas = canvasRef.current
    if (!canvas) return

    let dataUrl = qrCodeDataUrl
    
    if (format === 'jpg') {
      // Convert to JPG
      const ctx = canvas.getContext('2d')
      if (ctx) {
        dataUrl = canvas.toDataURL('image/jpeg', 0.95)
      }
    }

    const link = document.createElement('a')
    link.download = `qr-code.${format}`
    link.href = dataUrl
    link.click()

    setDownloadMessage(`Downloaded as ${format.toUpperCase()}`)
    setTimeout(() => setDownloadMessage(''), 3000)
  }, [qrCodeDataUrl])

  // Generate QR code when options change
  useEffect(() => {
    if (options.text.trim()) {
      const timeoutId = setTimeout(drawQRCode, 300) // Debounce
      return () => clearTimeout(timeoutId)
    }
  }, [options, drawQRCode])

  return (
    <div className="bg-charcoal/30 rounded-3xl p-8 backdrop-blur-sm border border-smoke/20">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-6">
          {/* URL Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-electric-lime">
              URL or Text
            </label>
            <input
              type="text"
              value={options.text}
              onChange={(e) => setOptions(prev => ({ ...prev, text: e.target.value }))}
              placeholder="Enter URL or text to encode..."
              className="w-full px-4 py-3 bg-smoke/30 border border-smoke/50 rounded-xl text-white placeholder-light-gray focus:border-electric-lime focus:outline-none transition-colors"
            />
          </div>

          {/* Color Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-electric-lime">
                Foreground Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={options.fgColor}
                  onChange={(e) => setOptions(prev => ({ ...prev, fgColor: e.target.value }))}
                  className="w-12 h-12 rounded-lg border border-smoke/50 bg-transparent cursor-pointer"
                />
                <input
                  type="text"
                  value={options.fgColor}
                  onChange={(e) => setOptions(prev => ({ ...prev, fgColor: e.target.value }))}
                  className="flex-1 px-3 py-2 bg-smoke/30 border border-smoke/50 rounded-lg text-white text-sm focus:border-electric-lime focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-electric-lime">
                Background Color
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={options.bgColor}
                  onChange={(e) => setOptions(prev => ({ ...prev, bgColor: e.target.value }))}
                  className="w-12 h-12 rounded-lg border border-smoke/50 bg-transparent cursor-pointer"
                />
                <input
                  type="text"
                  value={options.bgColor}
                  onChange={(e) => setOptions(prev => ({ ...prev, bgColor: e.target.value }))}
                  className="flex-1 px-3 py-2 bg-smoke/30 border border-smoke/50 rounded-lg text-white text-sm focus:border-electric-lime focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Size Control */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-electric-lime">
              Size: {options.size}px
            </label>
            <input
              type="range"
              min="200"
              max="800"
              step="50"
              value={options.size}
              onChange={(e) => setOptions(prev => ({ ...prev, size: parseInt(e.target.value) }))}
              className="w-full h-2 bg-smoke/30 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Corner Radius */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-electric-lime">
              Corner Radius: {options.cornerRadius}px
            </label>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={options.cornerRadius}
              onChange={(e) => setOptions(prev => ({ ...prev, cornerRadius: parseInt(e.target.value) }))}
              className="w-full h-2 bg-smoke/30 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          {/* Logo Upload */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-electric-lime">
              Logo (Optional)
            </label>
            
            {!logoPreview ? (
              <button
                onClick={() => logoInputRef.current?.click()}
                className="w-full p-4 border-2 border-dashed border-smoke/50 rounded-xl hover:border-electric-lime/50 transition-colors text-light-gray hover:text-white flex items-center justify-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="M21 15l-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                </svg>
                Upload Logo
              </button>
            ) : (
              <div className="flex items-center gap-3 p-3 bg-smoke/30 rounded-xl">
                <img src={logoPreview} alt="Logo preview" className="w-12 h-12 object-cover rounded-lg" />
                <div className="flex-1">
                  <p className="text-sm text-white">{options.logo?.name}</p>
                  <p className="text-xs text-light-gray">Logo uploaded</p>
                </div>
                <button
                  onClick={removeLogo}
                  className="p-1 text-light-gray hover:text-crimson transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            )}

            <input
              ref={logoInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />

            {logoPreview && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-electric-lime">
                  Logo Size: {options.logoSize}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="40"
                  step="5"
                  value={options.logoSize}
                  onChange={(e) => setOptions(prev => ({ ...prev, logoSize: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-smoke/30 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            )}
          </div>
        </div>

        {/* Preview and Download */}
        <div className="space-y-6">
          {/* QR Code Preview */}
          <div className="bg-smoke/30 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Preview</h3>
            
            {options.text.trim() ? (
              <div className="relative inline-block">
                {isGenerating && (
                  <div className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center z-10">
                    <div className="w-8 h-8 border-2 border-electric-lime border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                <div 
                  className="inline-block p-4 rounded-xl"
                  style={{ backgroundColor: options.bgColor }}
                >
                  {qrCodeDataUrl ? (
                    <img 
                      src={qrCodeDataUrl} 
                      alt="Generated QR Code" 
                      className="max-w-full h-auto rounded-lg"
                      style={{ maxWidth: '300px' }}
                    />
                  ) : (
                    <div 
                      className="border-2 border-dashed border-light-gray/30 rounded-lg flex items-center justify-center"
                      style={{ width: '256px', height: '256px' }}
                    >
                      <p className="text-light-gray">Enter text to generate QR code</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div 
                className="border-2 border-dashed border-smoke/50 rounded-xl flex items-center justify-center mx-auto"
                style={{ width: '300px', height: '300px' }}
              >
                <p className="text-light-gray">Enter URL or text above</p>
              </div>
            )}
          </div>

          {/* Download Buttons */}
          {qrCodeDataUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Download</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => downloadQRCode('png')}
                  className="px-6 py-3 bg-electric-lime text-deep-space font-semibold rounded-xl hover:bg-electric-lime/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  PNG
                </button>
                
                <button
                  onClick={() => downloadQRCode('jpg')}
                  className="px-6 py-3 bg-electric-blue text-white font-semibold rounded-xl hover:bg-electric-blue/90 transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  JPG
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-light-gray">
                  High quality • {options.size}×{options.size}px • Ready for print
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Download Success Message */}
      <AnimatePresence>
        {downloadMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed bottom-8 right-8 bg-electric-lime text-deep-space px-6 py-3 rounded-xl font-medium shadow-xl"
          >
            {downloadMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden Canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00FF88;
          cursor: pointer;
          border: 2px solid #0A0A0B;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #00FF88;
          cursor: pointer;
          border: 2px solid #0A0A0B;
        }
      `}</style>
    </div>
  )
}
