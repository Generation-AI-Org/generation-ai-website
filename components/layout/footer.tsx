'use client'

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="bg-bg border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={theme === 'dark'
                ? "/logos/generationai-weiss-transparent-wide.svg"
                : "/logos/generationai-pink-rot-wide.svg"
              }
              alt="Generation AI"
              width={140}
              height={28}
              className="h-7 w-auto"
            />
          </Link>

          {/* Placeholder Links - Phase 2 */}
          <nav className="flex items-center gap-6">
            <span className="text-text-muted text-sm">Links folgen in Phase 2</span>
          </nav>

          {/* Copyright */}
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Generation AI
          </p>
        </div>
      </div>
    </footer>
  );
}
