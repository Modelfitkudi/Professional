import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Exclusive Content | Premium Access",
  description: "Unlock exclusive content and behind-the-scenes access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <body className={`${inter.variable} antialiased overflow-x-hidden w-full relative`}>
        {/* Background ambient glow effects */}
        <div className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full bg-pink-600/20 blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none -z-10" />

        {children}
      </body>
    </html>
  );
}
