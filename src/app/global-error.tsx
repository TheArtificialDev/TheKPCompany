'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0B',
        color: 'white',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '600px', width: '100%' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
              color: '#00FF88', 
              marginBottom: '1rem',
              fontWeight: '700',
              lineHeight: '1.1'
            }}
          >
            Oops!
          </h1>
          <h2 
            style={{ 
              fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', 
              marginBottom: '1.5rem', 
              fontWeight: '400',
              color: '#FFFFFF'
            }}
          >
            Something went wrong
          </h2>
        </div>
        
        <p 
          style={{ 
            color: '#8E8E93', 
            marginBottom: '2rem', 
            lineHeight: '1.6',
            fontSize: '1rem'
          }}
        >
          We apologize for the inconvenience. An unexpected error has occurred. 
          Please try again or return to the homepage.
        </p>
        
        <div 
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center', 
            flexWrap: 'wrap',
            alignItems: 'center'
          }}
        >
          <button
            onClick={() => reset()}
            style={{
              backgroundColor: '#00FF88',
              color: '#0A0A0B',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              cursor: 'pointer',
              fontSize: '1rem',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
              minWidth: '120px'
            }}
          >
            Try again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#6B7280',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              fontFamily: 'inherit',
              transition: 'all 0.2s ease',
              minWidth: '120px'
            }}
          >
            Go home
          </button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details 
            style={{ 
              marginTop: '2rem', 
              textAlign: 'left',
              backgroundColor: '#1C1C1E',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid #2C2C2E'
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: '600', marginBottom: '0.5rem' }}>
              Error Details (Development)
            </summary>
            <pre 
              style={{ 
                fontSize: '0.875rem', 
                color: '#FF6B6B',
                overflow: 'auto',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              }}
            >
              {error.message}
              {error.stack && '\n\n' + error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
