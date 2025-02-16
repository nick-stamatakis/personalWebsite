import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nick Stamatakis Portfolio",
  description: "Portfolio website of Nick Stamatakis, Aspiring Software Engineer",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
      <div className="flex flex-col md:flex-row min-h-screen">
        <aside className="w-full md:w-1/4 bg-blue-600 p-8 text-center">
          <Image
              src="https://nick-stamatakis.github.io/personalWebsite/nick-headshot.jpg"
              alt="Nick Stamatakis"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold mt-6 text-white">Nick Stamatakis</h1>
          <p className="text-xl mt-2 text-blue-200">Aspiring Software Engineer</p>
          <div className="flex justify-center mt-6 space-x-4">
            <a href="https://github.com/nick-stamatakis" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Github className="text-white" size={24} />
            </a>
            <a href="https://linkedin.com/in/nicholas-stamatakis" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Linkedin className="text-white" size={24} />
            </a>
            <a href="mailto:nicholas.stamatakis@stonybrook.edu" className="hover:opacity-80 transition-opacity">
              <Mail className="text-white" size={24} />
            </a>
            <a href="tel:+16318090111" className="hover:opacity-80 transition-opacity">
              <Phone className="text-white" size={24} />
            </a>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-blue-200 transition-colors">Home</Link></li>
              <li><Link href="/experiences" className="text-white hover:text-blue-200 transition-colors">Experiences</Link></li>
              <li><Link href="/projects" className="text-white hover:text-blue-200 transition-colors">Projects</Link></li>
            </ul>
          </nav>
        </aside>
        <main className="flex-grow p-6">
          {children}
        </main>
      </div>
      </body>
      </html>
  );
}