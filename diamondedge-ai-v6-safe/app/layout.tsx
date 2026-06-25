import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'DiamondEdge AI', description: 'Professional MLB prop intelligence' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
