import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thabo Tshabalala | Software Developer',
  description: 'Personal portfolio website of Thabo Tshabalala, a passionate Software Developer showcasing projects and professional experience.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
