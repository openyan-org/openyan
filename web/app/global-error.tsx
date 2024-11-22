'use client'

import { Button } from "@/components/ui/button"
import { contacts } from "@/lib/config";
import { Roboto } from "next/font/google"
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className={`dark ${roboto.className}`}>
        <section id="error" className="text-center grid items-center justify-center mt-20">
          <h1 className="text-7xl pb-12 font-bold bg-gradient-to-tl from-black via-white to-teal-200 bg-clip-text text-transparent">
            Something went wrong...
          </h1>
          <p className="mt-8 max-w-3xl text-xl text-zinc-300">If you see this, then that means an error has occurred in our systems while processing your request(s). As we strive to provide the best possible service, we would greatly appreciate any information you can report to us about this issue.</p>
          <div>
            <Link href={`mailto:${contacts.developerEmail}`}>
              <Button size="lg" className="text-lg mt-12"><MdOutlineEmail />Write an Email</Button>
            </Link>
          </div>
        </section>
      </body>
    </html>
  )
}