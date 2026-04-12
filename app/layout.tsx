import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
    { media: "(prefers-color-scheme: light)", color: "#FAF7F8" },
  ],
};

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
    <html lang="de" className={`${inter.variable} ${GeistMono.variable}`}>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
