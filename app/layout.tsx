import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://generation-ai.org"),
  title: {
    default: "Generation AI",
    template: "%s | Generation AI",
  },
  description:
    "Die erste kostenlose KI-Community fuer Studierende im DACH-Raum",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Generation AI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={cn("font-sans", geist.variable)}>
      <body className="bg-black-brand text-gray-light antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
