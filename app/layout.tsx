import type { Metadata } from 'next'
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import WhatsappButton from '../components/WhatsappButton'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Bakry Dev — Full Stack Developer',
  description: 'React · Next.js · Node.js · MongoDB — Building fast, beautiful web products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${newsreader.variable} ${jetBrains.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        {children}
        <WhatsappButton />
      </body>
    </html>
  )
}
