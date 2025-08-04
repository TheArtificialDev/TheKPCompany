'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConversionOption {
  format: string;
  label: string;
  mime: string;
}

const conversionOptions: Record<string, ConversionOption[]> = {
  image: [
    { format: 'jpeg', label: 'JPEG', mime: 'image/jpeg' },
    { format: 'jpg', label: 'JPG', mime: 'image/jpeg' },
    { format: 'png', label: 'PNG', mime: 'image/png' },
    { format: 'webp', label: 'WebP', mime: 'image/webp' },
    { format: 'avif', label: 'AVIF', mime: 'image/avif' },
    { format: 'bmp', label: 'BMP', mime: 'image/bmp' },
    { format: 'gif', label: 'GIF', mime: 'image/gif' },
    { format: 'tiff', label: 'TIFF', mime: 'image/tiff' },
    { format: 'ico', label: 'ICO', mime: 'image/x-icon' },
    { format: 'svg', label: 'SVG', mime: 'image/svg+xml' },
    { format: 'heic', label: 'HEIC', mime: 'image/heic' },
  ],
  document: [
    { format: 'pdf', label: 'PDF', mime: 'application/pdf' },
    { format: 'docx', label: 'DOCX', mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
    { format: 'doc', label: 'DOC', mime: 'application/msword' },
    { format: 'txt', label: 'TXT', mime: 'text/plain' },
    { format: 'md', label: 'Markdown', mime: 'text/markdown' },
    { format: 'rtf', label: 'RTF', mime: 'application/rtf' },
    { format: 'odt', label: 'ODT', mime: 'application/vnd.oasis.opendocument.text' },
    { format: 'html', label: 'HTML', mime: 'text/html' },
    { format: 'xml', label: 'XML', mime: 'application/xml' },
    { format: 'json', label: 'JSON', mime: 'application/json' },
    { format: 'csv', label: 'CSV', mime: 'text/csv' },
    { format: 'epub', label: 'EPUB', mime: 'application/epub+zip' },
  ],
  text: [
    { format: 'txt', label: 'Plain Text', mime: 'text/plain' },
    { format: 'md', label: 'Markdown', mime: 'text/markdown' },
    { format: 'html', label: 'HTML', mime: 'text/html' },
    { format: 'xml', label: 'XML', mime: 'application/xml' },
    { format: 'json', label: 'JSON', mime: 'application/json' },
    { format: 'csv', label: 'CSV', mime: 'text/csv' },
    { format: 'yaml', label: 'YAML', mime: 'text/yaml' },
    { format: 'yml', label: 'YML', mime: 'text/yaml' },
    { format: 'toml', label: 'TOML', mime: 'text/toml' },
    { format: 'ini', label: 'INI', mime: 'text/plain' },
    { format: 'log', label: 'LOG', mime: 'text/plain' },
  ],
  audio: [
    { format: 'mp3', label: 'MP3', mime: 'audio/mpeg' },
    { format: 'wav', label: 'WAV', mime: 'audio/wav' },
    { format: 'flac', label: 'FLAC', mime: 'audio/flac' },
    { format: 'ogg', label: 'OGG', mime: 'audio/ogg' },
    { format: 'aac', label: 'AAC', mime: 'audio/aac' },
    { format: 'm4a', label: 'M4A', mime: 'audio/mp4' },
    { format: 'wma', label: 'WMA', mime: 'audio/x-ms-wma' },
    { format: 'opus', label: 'OPUS', mime: 'audio/opus' },
    { format: 'amr', label: 'AMR', mime: 'audio/amr' },
    { format: 'aiff', label: 'AIFF', mime: 'audio/aiff' },
  ],
  video: [
    { format: 'mp4', label: 'MP4', mime: 'video/mp4' },
    { format: 'avi', label: 'AVI', mime: 'video/x-msvideo' },
    { format: 'mov', label: 'MOV', mime: 'video/quicktime' },
    { format: 'wmv', label: 'WMV', mime: 'video/x-ms-wmv' },
    { format: 'flv', label: 'FLV', mime: 'video/x-flv' },
    { format: 'webm', label: 'WebM', mime: 'video/webm' },
    { format: 'mkv', label: 'MKV', mime: 'video/x-matroska' },
    { format: 'ogv', label: 'OGV', mime: 'video/ogg' },
    { format: '3gp', label: '3GP', mime: 'video/3gpp' },
    { format: 'mpg', label: 'MPG', mime: 'video/mpeg' },
    { format: 'mpeg', label: 'MPEG', mime: 'video/mpeg' },
  ],
  archive: [
    { format: 'zip', label: 'ZIP', mime: 'application/zip' },
    { format: 'rar', label: 'RAR', mime: 'application/vnd.rar' },
    { format: 'tar', label: 'TAR', mime: 'application/x-tar' },
    { format: '7z', label: '7Z', mime: 'application/x-7z-compressed' },
    { format: 'gz', label: 'GZ', mime: 'application/gzip' },
    { format: 'bz2', label: 'BZ2', mime: 'application/x-bzip2' },
    { format: 'xz', label: 'XZ', mime: 'application/x-xz' },
  ],
  spreadsheet: [
    { format: 'xlsx', label: 'XLSX', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    { format: 'xls', label: 'XLS', mime: 'application/vnd.ms-excel' },
    { format: 'csv', label: 'CSV', mime: 'text/csv' },
    { format: 'ods', label: 'ODS', mime: 'application/vnd.oasis.opendocument.spreadsheet' },
    { format: 'tsv', label: 'TSV', mime: 'text/tab-separated-values' },
  ],
  presentation: [
    { format: 'pptx', label: 'PPTX', mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
    { format: 'ppt', label: 'PPT', mime: 'application/vnd.ms-powerpoint' },
    { format: 'odp', label: 'ODP', mime: 'application/vnd.oasis.opendocument.presentation' },
    { format: 'pdf', label: 'PDF', mime: 'application/pdf' },
  ],
};

function getFileType(mimeType: string): string {
  if (mimeType.startsWith('image/')) return 'image';
  if (mimeType.startsWith('audio/')) return 'audio';
  if (mimeType.startsWith('video/')) return 'video';
  
  // Document types
  if (mimeType.includes('pdf') || mimeType.includes('document') || mimeType.includes('word') || 
      mimeType.includes('rtf') || mimeType.includes('odt') || mimeType.includes('epub')) {
    return 'document';
  }
  
  // Text types
  if (mimeType.startsWith('text/') || mimeType.includes('json') || mimeType.includes('xml') || 
      mimeType.includes('yaml') || mimeType.includes('markdown')) {
    return 'text';
  }
  
  // Spreadsheet types
  if (mimeType.includes('spreadsheet') || mimeType.includes('excel') || mimeType.includes('csv')) {
    return 'spreadsheet';
  }
  
  // Presentation types
  if (mimeType.includes('presentation') || mimeType.includes('powerpoint')) {
    return 'presentation';
  }
  
  // Archive types
  if (mimeType.includes('zip') || mimeType.includes('rar') || mimeType.includes('tar') || 
      mimeType.includes('gzip') || mimeType.includes('7z') || mimeType.includes('bzip')) {
    return 'archive';
  }
  
  return 'other';
}

function getFileTypeByExtension(filename: string): string {
  const ext = getFileExtension(filename);
  
  // Image extensions
  const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'tiff', 'webp', 'avif', 'ico', 'svg', 'heic'];
  if (imageExts.includes(ext)) return 'image';
  
  // Document extensions
  const docExts = ['pdf', 'doc', 'docx', 'rtf', 'odt', 'epub'];
  if (docExts.includes(ext)) return 'document';
  
  // Text extensions
  const textExts = ['txt', 'md', 'html', 'xml', 'json', 'yaml', 'yml', 'toml', 'ini', 'log'];
  if (textExts.includes(ext)) return 'text';
  
  // Audio extensions
  const audioExts = ['mp3', 'wav', 'flac', 'ogg', 'aac', 'm4a', 'wma', 'opus', 'amr', 'aiff'];
  if (audioExts.includes(ext)) return 'audio';
  
  // Video extensions
  const videoExts = ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv', 'ogv', '3gp', 'mpg', 'mpeg'];
  if (videoExts.includes(ext)) return 'video';
  
  // Spreadsheet extensions
  const spreadsheetExts = ['xlsx', 'xls', 'csv', 'ods', 'tsv'];
  if (spreadsheetExts.includes(ext)) return 'spreadsheet';
  
  // Presentation extensions
  const presentationExts = ['pptx', 'ppt', 'odp'];
  if (presentationExts.includes(ext)) return 'presentation';
  
  // Archive extensions
  const archiveExts = ['zip', 'rar', 'tar', '7z', 'gz', 'bz2', 'xz'];
  if (archiveExts.includes(ext)) return 'archive';
  
  return 'other';
}

function getFileExtension(filename: string): string {
  return filename.split('.').pop()?.toLowerCase() || '';
}

export default function MetaMorphConverter() {
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      // Use both MIME type and file extension for better detection
      let detectedType = getFileType(droppedFile.type);
      if (detectedType === 'other') {
        detectedType = getFileTypeByExtension(droppedFile.name);
      }
      setFileType(detectedType);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Use both MIME type and file extension for better detection
      let detectedType = getFileType(selectedFile.type);
      if (detectedType === 'other') {
        detectedType = getFileTypeByExtension(selectedFile.name);
      }
      setFileType(detectedType);
    }
  };

  const convertFile = async (targetFormat: string, targetMime: string) => {
    if (!file) return;
    
    setIsConverting(true);
    
    try {
      // For image conversion using Canvas API
      if (fileType === 'image') {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          
          canvas.toBlob((blob) => {
            if (blob) {
              const convertedFile = new File([blob], `${file.name.split('.')[0]}.${targetFormat}`, {
                type: targetMime,
              });
              downloadFile(convertedFile);
            }
            setIsConverting(false);
          }, targetMime);
        };
        
        img.src = URL.createObjectURL(file);
      } 
      // For text-based conversions
      else if (fileType === 'text' || fileType === 'document') {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          let convertedContent = content;
          
          // Basic text conversions
          if (targetFormat === 'html' && (file.name.endsWith('.md') || file.name.endsWith('.txt'))) {
            // Simple markdown to HTML conversion (basic)
            convertedContent = content
              .replace(/^# (.*$)/gim, '<h1>$1</h1>')
              .replace(/^## (.*$)/gim, '<h2>$1</h2>')
              .replace(/^### (.*$)/gim, '<h3>$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/\n/g, '<br>');
          } else if (targetFormat === 'md' && file.name.endsWith('.txt')) {
            // Basic text to markdown
            convertedContent = content.replace(/^(.+)$/gm, '$1  ');
          } else if (targetFormat === 'json' && file.name.endsWith('.csv')) {
            // Simple CSV to JSON conversion
            const lines = content.split('\n');
            const headers = lines[0].split(',');
            const jsonData = lines.slice(1).map(line => {
              const values = line.split(',');
              const obj: any = {};
              headers.forEach((header, index) => {
                obj[header.trim()] = values[index]?.trim() || '';
              });
              return obj;
            });
            convertedContent = JSON.stringify(jsonData, null, 2);
          }
          
          const blob = new Blob([convertedContent], { type: targetMime });
          const convertedFile = new File([blob], `${file.name.split('.')[0]}.${targetFormat}`, {
            type: targetMime,
          });
          downloadFile(convertedFile);
          setIsConverting(false);
        };
        reader.readAsText(file);
      } 
      // For other file types, rename with new extension
      else {
        const newFileName = `${file.name.split('.')[0]}.${targetFormat}`;
        const newFile = new File([file], newFileName, { type: targetMime });
        downloadFile(newFile);
        setIsConverting(false);
      }
    } catch (error) {
      console.error('Conversion failed:', error);
      setIsConverting(false);
    }
  };

  const downloadFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetConverter = () => {
    setFile(null);
    setFileType('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const availableOptions = fileType ? conversionOptions[fileType] || [] : [];
  const currentExtension = file ? getFileExtension(file.name) : '';

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-electric-lime bg-electric-lime/5' 
                : 'border-white/30 hover:border-white/50'
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileInput}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="*/*"
            />
            
            <div className="flex flex-col items-center">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-h4 font-semibold mb-2 text-white">
                Drop your file here
              </h3>
              <p className="text-body text-white/70 mb-4">
                Or click to browse and select a file
              </p>
              <div className="text-sm text-white/50">
                Supports images, documents, text files, audio, video, spreadsheets, presentations, and archives
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* File Info */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">
                    {fileType === 'image' && '�️'}
                    {fileType === 'document' && '�📄'}
                    {fileType === 'text' && '📝'}
                    {fileType === 'audio' && '🎵'}
                    {fileType === 'video' && '🎬'}
                    {fileType === 'spreadsheet' && '📊'}
                    {fileType === 'presentation' && '📊'}
                    {fileType === 'archive' && '📦'}
                    {fileType === 'other' && '📁'}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{file.name}</h3>
                    <p className="text-sm text-white/70">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • {fileType.charAt(0).toUpperCase() + fileType.slice(1)}
                      {fileType !== 'other' && ` (${currentExtension.toUpperCase()})`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetConverter}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Conversion Options */}
            {availableOptions.length > 0 && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">
                  Convert to ({availableOptions.length} options):
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availableOptions
                    .filter(option => option.format !== currentExtension)
                    .map((option) => (
                    <motion.button
                      key={option.format}
                      onClick={() => convertFile(option.format, option.mime)}
                      disabled={isConverting}
                      className="p-3 bg-white/10 hover:bg-electric-lime/20 border border-white/20 hover:border-electric-lime/50 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="font-medium text-white text-sm">{option.label}</div>
                      <div className="text-xs text-white/60 mt-1">.{option.format}</div>
                    </motion.button>
                  ))}
                </div>
                
                {isConverting && (
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center space-x-2 text-electric-lime">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-electric-lime border-t-transparent"></div>
                      <span>Converting...</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {availableOptions.length === 0 && (
              <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center">
                <p className="text-white/70">
                  This file type is not supported for conversion yet.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
