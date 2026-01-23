import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from '@/ui/layout/Navbar'
import './globals.css'
import { cookies } from 'next/headers'
import { cookiesValidation } from '@/lib/cookies'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Deka 🏆',
  description: 'App to track your DEKA training zones and workouts',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const { validToken } = await cookiesValidation(cookieStore)
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar validToken={validToken} />
        {children}
      </body>
    </html>
  )
}
