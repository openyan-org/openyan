"use client"

import Link from "next/link";
import { FaArrowRight, FaAsterisk } from "react-icons/fa";

export default function SignUpRightSection() {
  return (
    <div className="max-w-md">
      <div className="flex items-center justify-center text-center mb-8 text-2xl">
        <FaAsterisk className="mr-3" />
        <h1 className="font-bold">OpenYan</h1>
      </div>
      <p className="text-4xl text-center mb-4 font-bold text-orange-300">🎉 Lightship is here 🎉</p>
      <div className="mt-8 w-full max-w-lg mx-auto aspect-video rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/sPmat30SE4k"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex items-center text-lg justify-center mt-6">
        <p>See <Link href="/announcements/lighthouse-v1" className="underline hover:font-bold">everything that&apos;s new</Link></p>
        <FaArrowRight className="ml-2" />
      </div>
    </div>
  )
}
