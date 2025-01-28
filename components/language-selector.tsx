"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLanguage(storedLanguage)
  }, [])

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
    window.location.reload()
  }

  return (
    <div className="rounded-lg flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-gray-800 hover:border-gray-700 hover:bg-gray-800/50 py-0  px-2">
      <Globe className="h-4 w-4 text-gray-400" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[100px] border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder={language === "en" ? "Language" : "Langue"} />
        </SelectTrigger>
        <SelectContent className="bg-gray-900/95 border-gray-800">
          <SelectItem value="en" className="text-gray-200 focus:bg-gray-800 focus:text-white">
            English
          </SelectItem>
          <SelectItem value="fr" className="text-gray-200 focus:bg-gray-800 focus:text-white">
            Français
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

