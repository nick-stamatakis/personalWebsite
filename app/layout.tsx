import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Stamatakis - Software Engineer Portfolio",
  description: "Portfolio website of Nick Stamatakis, Software Engineer with experience at Amazon, Zebra Technologies, and whiz.study. Published researcher in adversarial machine learning.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
      </html>
  );
}