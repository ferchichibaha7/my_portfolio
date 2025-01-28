"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { translations } from "@/utils/translations"
import { experiences } from "@/utils/experience-data"

export function Experience() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLang(storedLanguage)
  }, [])

  const currentExperiences = experiences[lang as keyof typeof experiences]

  return (
    <section className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">{translations[lang].experience.title}</h2>
        <p className="text-gray-400">{translations[lang].experience.subtitle}</p>
        <div className="grid md:grid-cols-1 gap-6 mt-8">
          {currentExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:border-gray-700 transition-colors duration-300 backdrop-blur-sm bg-black/30 border-gray-800">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{exp.company}</h3>
                      <p className="text-sm text-gray-400">{exp.role}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">{exp.period}</span>
                      <p className="text-xs text-gray-500">{exp.type}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-4 text-gray-300">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="font-bold text-purple-400">{highlight.split(":")[0]}:</span>
                        {highlight.split(":")[1]}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-800">
                    <p className="text-sm text-gray-400">{exp.tech}</p>
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

