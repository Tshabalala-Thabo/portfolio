import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thabo Tshabalala | Junior Full-Stack Software Developer',
  description:
    'Portfolio of Thabo Tshabalala, a junior full-stack software developer building secure Laravel, Next.js, MySQL, AWS-aware APIs, and financial-sector systems.',
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
