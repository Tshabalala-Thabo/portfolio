import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thabo Tshabalala | Junior Software Developer',
  description:
    'Portfolio of Thabo Tshabalala, a junior software developer building secure Next.js, Laravel, MySQL, and financial-sector systems.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
