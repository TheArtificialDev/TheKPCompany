'use client'

import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

export function Loading({ size = 'md', text = 'Loading...', fullScreen = false }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  }

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Animated logo/icon */}
      <div className="relative">
        <div className={`${sizeClasses[size]} border-2 border-electric-lime/20 rounded-full animate-spin`}>
          <div className={`${sizeClasses[size]} border-2 border-transparent border-t-electric-lime rounded-full animate-pulse`}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-electric-lime rounded-full animate-ping"></div>
        </div>
      </div>
      
      {text && (
        <p className={`${textSizeClasses[size]} text-light-gray animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-deep-space/90 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-charcoal/90 backdrop-blur-lg rounded-2xl border border-smoke p-8 max-w-sm w-full mx-4">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  return <LoadingSpinner />
}

// Page transition loading component
export function PageLoading() {
  return (
    <div className="fixed inset-0 bg-deep-space/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated geometric shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-electric-lime/20 rounded-full animate-spin"></div>
          <div className="absolute top-3/4 right-1/4 w-16 h-16 border border-electric-lime/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 border border-electric-lime/10 rounded-lg animate-bounce"></div>
        </div>
        
        {/* Main loading content */}
        <div className="relative z-10 bg-charcoal/80 backdrop-blur-lg rounded-2xl border border-smoke p-12 max-w-md w-full mx-4">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto relative">
              <div className="w-16 h-16 border-4 border-electric-lime/20 rounded-full animate-spin">
                <div className="w-16 h-16 border-4 border-transparent border-t-electric-lime rounded-full"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-electric-lime rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
          <p className="text-light-gray text-sm">Preparing your experience</p>
          
          {/* Progress bar animation */}
          <div className="mt-6 w-full bg-smoke rounded-full h-1">
            <div className="bg-electric-lime h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Tool loading component
export function ToolLoading({ toolName }: { toolName?: string }) {
  return (
    <div className="flex items-center justify-center py-24">
      <div className="bg-charcoal/50 backdrop-blur-lg rounded-2xl border border-smoke p-8 max-w-sm w-full mx-4 text-center">
        <div className="mb-6">
          <div className="w-12 h-12 mx-auto relative">
            <div className="w-12 h-12 border-3 border-electric-lime/30 rounded-full animate-spin">
              <div className="w-12 h-12 border-3 border-transparent border-t-electric-lime rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-electric-lime animate-pulse">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2">
          {toolName ? `Loading ${toolName}...` : 'Loading Tool...'}
        </h3>
        <p className="text-light-gray text-sm">Getting everything ready for you</p>
      </div>
    </div>
  )
}

export default Loading
