"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { translations } from "@/utils/translations"
import { skills } from "@/utils/skills-data"

export function Skills() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLang(storedLanguage)
  }, [])

  const currentSkills = skills[lang as keyof typeof skills]

  return (
    <section className="py-20" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">{translations[lang].skills.title}</h2>
        <p className="text-gray-400 mb-8">{translations[lang].skills.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(currentSkills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-gray-700 transition-colors duration-300 backdrop-blur-sm bg-black/30 border-gray-800">
                <CardHeader>
                  <CardTitle className="capitalize group-hover:text-purple-400 transition-colors">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="secondary" className="bg-gray-900 hover:bg-gray-800 transition-colors">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

