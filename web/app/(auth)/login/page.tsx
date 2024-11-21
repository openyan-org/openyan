import Link from "next/link";
import { FaAsterisk as OpenYanIcon } from "react-icons/fa";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";
import OAuthLoginButton from "@/components/auth/oauth-login-button";

export default function LoginPage() {
  return (
    <section id="login" className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="flex justify-center text-center mb-12">
          <OpenYanIcon size={64} />
        </div>
        <h1 className="text-3xl font-bold mb-3">Login to OpenYan</h1>
        <p className="mb-8 text-sm text-teal-400">Secured by OAuth 2.0</p>
        <div className="grid space-y-2">
          <OAuthLoginButton provider="google" />
          <OAuthLoginButton provider="github" />
          <OAuthLoginButton provider="discord" />
        </div>
        <Link href="/" className="btn-animate hover:text-teal-400 mt-8 flex justify-center text-sm items-center"><ArrowLeftIcon size={20} className="mr-1" />Return to Home</Link>
      </div>
    </section>
  )
}