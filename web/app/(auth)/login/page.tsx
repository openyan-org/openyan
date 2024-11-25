import Link from "next/link";
import { FaAsterisk as OpenYanIcon } from "react-icons/fa";
import { ArrowLeft as ArrowLeftIcon } from "lucide-react";
import OAuthLoginButton from "@/components/auth/oauth-login-button";
import FadeIn from "@/components/animation/fade-in";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { urls } from "@/lib/config";

export default async function LoginPage() {
  const session = await auth()

  if (session) redirect("/dash")

  return (
    <section id="login" className="flex items-center justify-center h-screen">
      <FadeIn>
        <div className="text-center">
          <div className="flex justify-center text-center mb-12">
            <OpenYanIcon size={64} />
          </div>
          <h1 className="text-3xl font-bold mb-3">Login to OpenYan</h1>
          <p className="mb-8 text-sm text-teal-300">Secured by OAuth 2.0</p>
          <div className="grid space-y-2">
            <OAuthLoginButton provider="google" />
            <OAuthLoginButton provider="github" />
          </div>
          <Link href={urls.homePage} className="btn-animate hover:text-teal-300 mt-8 flex justify-center text-sm items-center"><ArrowLeftIcon size={20} className="mr-1" />Return to Home</Link>
        </div>
      </FadeIn>
    </section>
  )
}