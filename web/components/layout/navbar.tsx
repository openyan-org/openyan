import { Button } from '../ui/button'
import { FaAsterisk } from 'react-icons/fa'
import Link from 'next/link'
import FadeIn from '../animation/fade-in'
import { MenuSheet } from './nav-menu-sheet'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <FadeIn>
            <Link href="/" className="text-2xl font-bold text-primary flex items-center transition-all duration-300 hover:text-3xl">
              <FaAsterisk className="mr-2" />
              <h1>OpenYan</h1>
            </Link>
          </FadeIn>
          <FadeIn>
            <div className="flex items-center space-x-3">
              <Link href="/login">
                <Button className="bg-teal-400 hover:bg-teal-500">
                  Get Started
                </Button>
              </Link>
              <MenuSheet />
            </div>
          </FadeIn>
        </div>
      </div>
    </nav>
  )
}