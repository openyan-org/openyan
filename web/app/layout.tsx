import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "OpenYan",
  description: "Free, open-source software for developers and students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`dark ${roboto.className}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
