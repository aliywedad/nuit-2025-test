import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3FA Security Trainer",
  description: "Mini application pour apprendre la sécurité et le Three-Factor Authentication (3FA).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image2.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-100`}
      >
        <NavBar />
        {/* marge en haut pour ne pas être caché par la navbar */}
        <main className="min-h-screen px-4 pb-10 pt-24 md:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
