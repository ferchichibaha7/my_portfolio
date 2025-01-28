"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import { translations } from "@/utils/translations"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Hero() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLang(storedLanguage)
  }, [])

  const handleDownload = (language: string) => {
    // Replace these URLs with the actual URLs of your resume files
    const resumeUrls = {
      en: "/baha_ferchichi_resume_.pdf",
      fr: "/ferchichi_baha_cv.pdf",
    }
    window.open(resumeUrls[language as keyof typeof resumeUrls], "_blank")
  }

  return (
    <section className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full px-3 py-1 text-sm bg-gray-900 border border-gray-800 text-gray-400"
            >
              {translations[lang].hero.role}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              {translations[lang].hero.title}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                {translations[lang].hero.subtitle}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg max-w-2xl"
            >
              {translations[lang].hero.description}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="group">
                  {translations[lang].hero.downloadResume}
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem className="cursor-pointer"  onClick={() => handleDownload("en")}>
                  {translations[lang].hero.downloadEnglish}
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={() => handleDownload("fr")}>
                  {translations[lang].hero.downloadFrench}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
                href={`#experience`}
                className="text-sm text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              >
            <Button variant="ghost" className="border border-gray-800">
              {translations[lang].hero.viewWork}
            </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/ferchichibaha7" },
              { icon: Linkedin, href: "https://linkedin.com/in/ferchichibaha7" },
              { icon: Mail, href: "mailto:bahaferchichi@outlook.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative lg:justify-end flex justify-center"
        >
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-3xl opacity-10 z-0" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/baha.jpg-F3a8MRXQDTRI2vwqjSPd6hdZXLexui.jpeg"
              alt="Profile"
              width={288}
              height={288}
              className="rounded-full border-2 border-gray-800 object-cover hover:scale-110 transition-transform duration-500 z-10 relative"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

