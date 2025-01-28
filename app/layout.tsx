import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageSelector } from "@/components/language-selector"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Baha Ferchichi - Full Stack Developer",
  description:
    "Full Stack Web Developer with 4+ years of experience specializing in Ruby on Rails, Node.js, Angular, and JavaScript frameworks.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        {children}
      </body>
    </html>
  )
}

