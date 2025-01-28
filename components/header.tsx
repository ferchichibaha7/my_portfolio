"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { LanguageSelector } from "./language-selector"
import { translations } from "@/utils/translations"
import { useEffect, useState } from "react"

export function Header() {
 const [lang, setLang] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLang(storedLanguage)
  }, [])
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-sm bg-black/30 px-4 sm:px-24 lg:px-32 sticky top-0 z-50 border-b border-gray-800"
    >
      <div className="container  ">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          >
            Baha Ferchichi
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {["About", "Experience", "Skills", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
  <LanguageSelector />
  <Link
    href={`#contact`}
    className="text-sm text-gray-400 hover:text-white "
  >
    <Button variant="ghost" className="border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50">
     {translations[lang].action}
    </Button>
  </Link>
</div>

        </div>
      </div>
    </motion.header>
  )
}

