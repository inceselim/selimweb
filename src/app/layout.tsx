import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Selim İNCE',
  description: 'Selim ince personal web site',
  authors: [{ name: "Selim ince", url: "https://www.linkedin.com/in/selim-ince-542a13176/" }],
  keywords: ["react native", "react", "nextjs", "firebase", "nodejs",],
  robots: { googleBot: "", index: true }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <Head>
        <meta name='robots' content='index, follow' />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
