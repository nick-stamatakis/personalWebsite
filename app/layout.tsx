import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const basePath =
  process.env.NODE_ENV === "production" ? "/personalWebsite" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://nick-stamatakis.github.io"),
  title: "Nicholas Stamatakis",
  description:
    "Software engineer with experience at Amazon, Zebra Technologies, and West Palm Test Prep. Published researcher in adversarial machine learning. CS + Applied Math & Stats at Stony Brook University.",
  icons: {
    icon: `${basePath}/nick-headshot.jpg`,
    apple: `${basePath}/nick-headshot.jpg`,
  },
  openGraph: {
    title: "Nicholas Stamatakis",
    description:
      "Full-stack engineer who ships products people use. Built an AI tutoring platform serving 75,000+ users. Published at ACM CCS '25.",
    url: "https://nick-stamatakis.github.io/personalWebsite/",
    siteName: "Nicholas Stamatakis",
    images: [
      {
        url: `${basePath}/nick-headshot.jpg`,
        width: 400,
        height: 400,
        alt: "Nicholas Stamatakis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nicholas Stamatakis",
    description:
      "Full-stack engineer who ships products people use. Built an AI tutoring platform serving 75,000+ users.",
    images: [`${basePath}/nick-headshot.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
