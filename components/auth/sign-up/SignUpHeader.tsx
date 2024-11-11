"use client"

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function SignUpHeader() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="space-y-1 p-4 pb-0 text-left mb-2">
      <Link href="/">
      <Button onClick={() => setIsLoading(true)} variant="outline" className="py-4 flex items-center mb-8 btn-animate">
          {isLoading ? (
            <Icons.spinner className="animate-spin" />
          ) : (
            <>
              <FaArrowLeft />
              <p>Return to Home</p>
            </>
          )}
      </Button>
      </Link>
      <div className="text-4xl font-bold mb-4">Sign Up&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
    </div>
  )
}