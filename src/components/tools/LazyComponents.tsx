'use client'

import dynamic from 'next/dynamic'
import { ToolLoading } from '@/components/ui/Loading'

// Lazy load all tools for better performance
export const LazyCalciVerse = dynamic(
  () => import('@/components/tools/CalciVerse'),
  {
    loading: () => <ToolLoading toolName="CalciVerse" />,
    ssr: false // Tools don't need SSR as they're interactive
  }
)

export const LazyScribeCanvas = dynamic(
  () => import('@/components/tools/ScribeCanvas'),
  {
    loading: () => <ToolLoading toolName="ScribeCanvas" />,
    ssr: false
  }
)

export const LazyPDFAlchemy = dynamic(
  () => import('@/components/tools/PDFAlchemy'),
  {
    loading: () => <ToolLoading toolName="PDF Alchemy" />,
    ssr: false
  }
)

export const LazyQRCodeGenerator = dynamic(
  () => import('@/components/tools/QRCodeGenerator'),
  {
    loading: () => <ToolLoading toolName="QR Artisan" />,
    ssr: false
  }
)

export const LazyChromaCaptureExtractor = dynamic(
  () => import('@/components/tools/ChromaCaptureExtractor'),
  {
    loading: () => <ToolLoading toolName="ChromaCapture" />,
    ssr: false
  }
)

export const LazyMetaMorphConverter = dynamic(
  () => import('@/components/tools/MetaMorphConverter'),
  {
    loading: () => <ToolLoading toolName="MetaMorph" />,
    ssr: false
  }
)
