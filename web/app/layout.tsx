import type { Metadata } from "next";
import "@/app/globals.css";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "OpenYan",
  description: "Free, open-source apps and tooling for students and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`dark ${roboto.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}