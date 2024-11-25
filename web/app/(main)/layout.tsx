import "@/app/globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Separator } from "@/components/ui/separator";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 py-16">
        {children}
      </div>
      <Separator className="mt-12" />
      <Footer />
    </>
  );
}