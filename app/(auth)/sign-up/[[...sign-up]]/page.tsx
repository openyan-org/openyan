"use client"

import { SignUpForm, SignUpRightSection } from '@/components/auth/sign-up'
import { motion } from 'framer-motion'

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen sm:grid-cols-2">
      <motion.div 
        className="flex items-center justify-center text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SignUpForm />
      </motion.div>
      
      <motion.div 
        className="bg-zinc-900 hidden sm:flex flex-col items-center justify-center text-primary p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        <SignUpRightSection />
      </motion.div>
    </div>
  )
}
