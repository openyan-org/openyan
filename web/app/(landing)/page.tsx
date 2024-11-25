import Hero from "@/components/landing/hero";
import PinnedProduct from "@/components/landing/pinned-product";
import Particles from "@/components/ui/particles";
import { auth } from "@/lib/auth";
import { urls } from "@/lib/config";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()

  if (session) redirect(urls.dashboardPage)

  return (
    <section id="home" className="text-center mt-16 space-y-24">
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
