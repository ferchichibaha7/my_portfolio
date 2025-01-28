import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative">
        <div className="">
          <Header />
          <main className="container px-4 sm:px-24 lg:px-24 py-8">
            <Hero />
            <Experience />
            <Skills />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  )
}

