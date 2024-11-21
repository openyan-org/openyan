import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGoogle as GoogleIcon } from "react-icons/fa";
import { FaGithub as GitHubIcon } from "react-icons/fa";
import { FaDiscord as DiscordIcon } from "react-icons/fa";
import { FaAsterisk as OpenYanIcon } from "react-icons/fa";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="flex justify-center text-center mb-12">
          <OpenYanIcon size={64} />
        </div>
        <h1 className="text-3xl font-bold mb-3">Login to OpenYan</h1>
        <p className="mb-8 text-sm text-green-300">Secured by OAuth 2.0</p>
        <div className="grid space-y-2">
          <Button variant="outline" className="text-md px-14 py-6 rounded rounded-xl"><GoogleIcon /> Continue with Google</Button>
          <Button variant="outline" className="text-md px-14 py-6 rounded rounded-xl"><GitHubIcon /> Continue with GitHub</Button>
          <Button variant="outline" className="text-md px-14 py-6 rounded rounded-xl"><DiscordIcon /> Continue with Discord</Button>
        </div>
        <Link href="/" className="hover:text-green-300 mt-8 flex justify-center text-sm items-center"><ArrowLeftIcon size={20} className="mr-1" />Return to Home</Link>
      </div>
    </div>
  )
}