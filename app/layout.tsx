import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import RainingLetters from "@/components/RainingLetters"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio Profesional",
  description: "Portfolio profesional con estilo minimalista y tech",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={cn(inter.className, "bg-black text-white antialiased")}>
        <RainingLetters />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
