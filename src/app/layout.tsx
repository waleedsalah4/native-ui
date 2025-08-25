import type { ReactNode } from "react";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Native Ui",
    template: "%s | Native Ui",
  },
  description:
    "Native UI is a collection of reusable React components and hooks built with React, TypeScript, and Tailwind CSS. No extra UI libraries, just pure React power.",
  keywords: [
    "React",
    "UI",
    "Components",
    "Hooks",
    "Reusable",
    "Tailwind",
    "TypeScript",
    "Vite",
    "Next.js",
    "Lightweight UI",
  ],
  authors: [{ name: "Waleed Salah" }],
  openGraph: {
    type: "website",
    url: "https://native-ui.vercel.app/",
    title: "Native UI – React Components & Hooks",
    description:
      "Build faster with lightweight, customizable React components and hooks. No extra libraries needed – just React, TypeScript, and Tailwind CSS.",
    images: [
      {
        url: "https://native-ui.vercel.app/native-ui.png",
        // width: 1200,
        // height: 630,
        alt: "Native UI – React Components & Hooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Native UI – React Components & Hooks",
    description:
      "Lightweight, customizable React components and hooks. Pure React with Tailwind CSS – no extra UI libraries required.",
    images: ["https://native-ui.vercel.app/native-ui.png"],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
