"use client"

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Menu } from 'lucide-react'
import { Separator } from '../ui/separator'
import { FaAsterisk } from 'react-icons/fa'
import Link from 'next/link'

export default function Navbar() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const navItems = {
    "Lightship 🚀": '/lightship',
    "LazyAPI 🌐": '/lazyapi',
    "Nexus 🤖": '/nexus'
  }

  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary flex items-center transition-all duration-300 hover:text-3xl">
            <FaAsterisk className="mr-2" />
            <h1>OpenYan</h1>
          </Link>
        </motion.div>
        <div className="flex items-center space-x-2">
          {mounted && (
            <Link href="/login">
              <Button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                Get Started
              </Button>
            </Link>
          )}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex items-center">
                <FaAsterisk className="mr-2 text-2xl" />
                <SheetTitle className="text-2xl">OpenYan</SheetTitle>
              </div>
              <nav className="mt-6 flex flex-col">
                <div className="ml-2">
                  <h2 className="font-extrabold text-xl text-orange-300">Products</h2>
                  <Separator className="my-2" />
                </div>
                {Object.entries(navItems).map(([item, url]) => (
                  <Link key={item} href={url} className="py-2 pl-2 rounded rounded-xl hover:bg-white hover:text-black text-lg font-medium transition duration-300">
                    {item}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}