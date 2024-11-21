import Hero from "@/components/landing/hero";
import PinnedProduct from "@/components/landing/pinned-product";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import Link from "next/link";
import { FaArrowRight, FaBook, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="text-center mt-16 space-y-32">
      <Hero />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
      <PinnedProduct />
    </section>
  );
}
