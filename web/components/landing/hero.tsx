import FadeIn from "../animation/fade-in";
import { Button } from "../ui/button";
import { FaArrowRight, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <FadeIn>
        <div className="text-6xl pb-10 font-bold bg-gradient-to-tl from-black via-white to-teal-200 bg-clip-text text-transparent">
          Focus on what matters,<br />
          leave the boring parts to us.
        </div>
        <div className="text-lg text-zinc-300 mb-10">
          Free, open-source apps and tooling for students and developers.
        </div>
        <div className="flex items-center justify-center space-x-2">
          <Button size="lg" className="text-md py-6 btn-animate bg-teal-400 hover:bg-teal-500">Get Started for Free <FaArrowRight /></Button>
          <Button size="lg" variant="outline" className="text-md py-6 btn-animate border-zinc-700">Source <FaGithub /></Button>
        </div>
      </FadeIn>
    </>
  )
}