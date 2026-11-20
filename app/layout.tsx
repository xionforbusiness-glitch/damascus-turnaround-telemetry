import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Damascus Turnaround Telemetry | Aethelgard Studio',
  description: 'Damascus Airport Ground Turnaround Telemetry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090D16] text-slate-100 antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
