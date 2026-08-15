import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import WhatsappButton from '../components/WhatsappButton'

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Bakry Dev — Full Stack Developer',
  description: 'React · Next.js · Node.js · MongoDB — Building fast, beautiful web products.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plexMono.variable} ${plexSans.variable}`}>
      <body className="bg-bg text-text font-body antialiased">
        {children}
        <WhatsappButton />
      </body>
    </html>
  )
}
