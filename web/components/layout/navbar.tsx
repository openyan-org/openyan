import { Button } from '../ui/button'
import { FaAsterisk } from 'react-icons/fa'
import Link from 'next/link'
import FadeIn from '../animation/fade-in'
import { MenuSheet } from './nav-menu-sheet'
import { auth } from '@/lib/auth'
import ProfileMenu from './profile-menu'
import { urls } from '@/lib/config'

export default async function Navbar() {
  const session = await auth()
  return (
    <header className="border-b">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <FadeIn>
            <Link href={session ? "#" : urls.homePage} className="text-2xl font-bold text-primary flex items-center transition-all duration-300 hover:text-3xl">
              <FaAsterisk className="mr-2" />
              <h1>OpenYan</h1>
            </Link>
          </FadeIn>
          <FadeIn>
            <div className="flex items-center space-x-3">
              {!session ?
                <Link href={urls.loginPage}>
                  <Button className="bg-teal-300 hover:bg-teal-500">
                    Get Started
                  </Button>
                </Link>
                :
                <ProfileMenu
                  avatarImgSrc={session?.user?.image!}
                  username={session?.user?.name!}
                />
              }
              <MenuSheet />
            </div>
          </FadeIn>
        </div>
      </nav>
    </header>
  )
}