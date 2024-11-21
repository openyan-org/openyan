import "@/app/globals.css";
import Navbar from "@/components/layout/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,128,128,0.3),rgba(0,0,0,0))]">
        <Navbar />
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </div>
    </>
  );
}