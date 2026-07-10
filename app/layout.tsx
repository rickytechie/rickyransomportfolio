import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricky Ransom | Full-Stack Developer & Entrepreneur",
  description:
    "Multi-disciplinary entrepreneur, Full-Stack Developer, and Keynote Speaker. Building ventures on the Road to Success — where culture meets functional code.",
  openGraph: {
    title: "Ricky Ransom | RKYRNSM",
    description:
    "Full-Stack Developer, Entrepreneur & Keynote Speaker. The Road to Success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
