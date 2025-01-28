"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useEffect, useState } from "react"
import { translations } from "@/utils/translations"

export function Contact() {
  const [lang, setLang] = useState("en")
  const [formStatus, setFormStatus] = useState("")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en"
    setLang(storedLanguage)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setFormStatus("success")
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    }
  }

  return (
    <section className="py-20" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">{translations[lang].contact.title}</h2>
        <p className="text-gray-400 mb-8">{translations[lang].contact.subtitle}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full backdrop-blur-sm bg-black/30 border-gray-800 hover:border-gray-700 transition-colors">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { icon: Mail, text: "bahaferchichi@outlook.com", href: "mailto:bahaferchichi@outlook.com" },
                  { icon: Phone, text: "+216 29 204 755" },
                  { icon: MapPin, text: "Tunisia, Tunis" },
                  { icon: Github, text: "github.com/ferchichibaha7", href: "https://github.com/ferchichibaha7" },
                  {
                    icon: Linkedin,
                    text: "linkedin.com/in/ferchichibaha7",
                    href: "https://linkedin.com/in/ferchichibaha7",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <item.icon className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{item.text}</span>
                    )}
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-sm bg-black/30 border-gray-800 hover:border-gray-700 transition-colors">
              <CardHeader>
                <CardTitle> {translations[lang].contact.sendmsg} </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input
                        name="name"
                        placeholder={translations[lang].contact.name}
                        className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        name="email"
                        placeholder={translations[lang].contact.email}
                        className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="subject"
                      placeholder={translations[lang].contact.subject}
                      className="bg-gray-900/50 border-gray-800 focus:border-purple-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      name="message"
                      placeholder={translations[lang].contact.message}
                      className="min-h-[120px] bg-gray-900/50 border-gray-800 focus:border-purple-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full group">
                    {translations[lang].contact.send}
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
                  </Button>
                </form>
                {formStatus === "success" && <p className="mt-4 text-green-500">Message sent successfully!</p>}
                {formStatus === "error" && <p className="mt-4 text-red-500">An error occurred. Please try again.</p>}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

