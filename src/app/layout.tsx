import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ajhenry.com"),
  title: "Andrew Henry (@ajhenry) - Full Stack Software Engineer",
  description:
    "A full stack software engineer and startup co-founder. Currently working at GitHub and on interviews.so. I write about software and startups.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "ajhenry",
    "Andrew",
    "Henry",
    "Andrew Henry",
    "Personal Website",
    "Developer",
    "Developer Blog",
    "Blog",
    "React",
    "JavaScript",
  ],
  authors: [{ name: "Andrew Henry", url: "https://github.com/ajhenry" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Andrew Henry (@ajhenry) - Full Stack Software Engineer",
    description:
      "A full stack software engineer and startup co-founder. Currently working at GitHub and on interviews.so. I write about software and startups.",
    images: "/opengraph-image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
