import FadeIn from "@/components/animation/fade-in";
import Navbar from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { contacts, urls } from "@/lib/config";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function NotFoundPage() {
  const session = await auth()
  return (
    <>
      <Navbar />
      <FadeIn>
        <section id="not-found" className="text-center grid items-center justify-center mt-20">
          <h1 className="text-9xl font-bold bg-gradient-to-tl from-black via-white to-teal-200 bg-clip-text text-transparent">
            Uh-oh!
          </h1>
          <p className="mt-8 text-lg max-w-md text-zinc-400">We could not find the resource you were looking for. If you believe this was a mistake, please create a{" "}
            <Link className="text-teal-300 hover:text-teal-400" href={urls.newSupportTicketPage}>
              support ticket
            </Link>
            {" "}or contact the developer at
            {" "}
            <Link className="text-teal-300 hover:text-teal-400" href={`mailto:${contacts.developerEmail}`}>
              {contacts.developerEmail}
            </Link>
          </p>
          <Link href={session ? urls.dashboardPage : urls.homePage}>
            <Button size="lg" className="btn-animate text-lg mt-8">Return to {session ? "Dashboard" : "Home"} <FaArrowRight /></Button>
          </Link>
        </section>
      </FadeIn>
    </>
  )
}