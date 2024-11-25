import FadeIn from "@/components/animation/fade-in";
import Badge from "@/components/common/badge";
import ComingSoonCard from "@/components/common/coming-soon-card";
import { urls } from "@/lib/config";
import Link from "next/link";
import { FaArrowRight, FaMagic, FaRocket } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { MdOutlineMiscellaneousServices as WIPIcon } from "react-icons/md";

export default function DashboardPage() {
  return (
    <section id="dashboard">
      <FadeIn>
        <h1 className="text-4xl font-bold text-center flex justify-center items-center"><MdDashboard className="mr-4" /> My Dashboard</h1>
        <div className="flex items-center w-full mt-6">
          <div className="flex-grow border-t border-zinc-800" />
          <div className="mx-4">
            <FaMagic className="text-teal-300" />
          </div>
          <div className="flex-grow border-t border-zinc-800" />
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          <Link href={urls.lazyAPIPage} className="hover:border-teal-500 p-8 border rounded-lg hover:bg-zinc-900 hover:cursor-pointer btn-animate">
            <FaRocket size={32} className="text-teal-400" />
            <h2 className="mt-4 text-2xl font-bold mb-4 flex items-center">LazyAPI <Badge text="New" /></h2>
            <p className="text-zinc-400">Generate typesafe, fully documented CRUD handlers to kickstart your new REST API.</p>
            <div className="mt-4 flex items-center">Start using LazyAPI <FaArrowRight className="ml-2" /></div>
          </Link>
          <ComingSoonCard />
          <ComingSoonCard />
        </div>
      </FadeIn>
    </section >
  )
}