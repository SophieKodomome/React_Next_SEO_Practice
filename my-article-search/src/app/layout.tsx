import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nacelle = Noto_Sans({ // Replace Noto_Sans with the correct font name
  variable: "--font-nacelle",  // Give it a CSS variable name
  subsets: ["latin"],          // Specify subsets (important!)
});

export const metadata: Metadata = {
  title: "Hello",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nacelle.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
