import Link from "next/link";
import { Button } from "../ui/button";
import { FaArrowRight, FaBook, FaSearch } from "react-icons/fa";

export default function PinnedProduct() {
  return (
    <div className="bg-zinc-900 px-8 py-12 rounded-2xl bg-opacity-30 border">
      <h2 className="text-5xl mb-4 font-bold">
        🎉 Introducing <span className="bg-gradient-to-r from-orange-300 to-purple-300 bg-clip-text text-transparent">
          LazyAPI
        </span> 🎉
      </h2>
      <Link
        href="/releases/lazyapi-v1"
        className="flex items-center justify-center my-6 text-lg"
      >
        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-zinc-700"></div>
          <Button
            variant="outline"
            className="border-zinc-700 rounded-2xl btn-animate mx-4 flex items-center"
          >
            <FaBook className="mr-2" />
            LazyAPI 1.0 Release Notes
            <FaArrowRight className="ml-2" />
          </Button>
          <div className="border-zinc-700 flex-grow border-t"></div>
        </div>
      </Link>
      <p className="text-lg text-zinc-200">LazyAPI is an intuitive and friendly no-code interface designed to help you kickstart your REST APIs by generating type-safe, fully-documented CRUD handlers based on your LazyAPI specification.</p>
      <iframe
        className="border my-6 w-full aspect-video self-stretch rounded-3xl"
        src="https://www.youtube.com/embed/sPmat30SE4k"
        aria-hidden="true"
      />
      <Button
        className="w-full text-lg py-8 btn-animate"
        size="lg"
      >Try Out LazyAPI <FaSearch />
      </Button>
    </div>
  )
}