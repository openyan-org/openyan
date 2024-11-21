import FadeIn from "@/components/animation/fade-in";
import Hero from "@/components/landing/hero";
import Particles from "@/components/ui/particles";

export default function Home() {
  return (
    <section id="home" className="text-center mt-16">
      <Hero />
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#fff"}
        refresh
      />
    </section>
  );
}
