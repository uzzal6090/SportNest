"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "All Facilities" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Trophy className="h-5 w-5" />
          </span>
          Sport<span className="text-emerald-600">Nest</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "border-b-2 pb-1 text-sm font-medium transition-colors hover:text-emerald-600",
                  pathname === link.href
                    ? "border-emerald-600 text-emerald-600"
                    : "border-transparent text-slate-600"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700"
          >
            <Link href="/login">Login</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-slate-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-100",
                    pathname === link.href
                      ? "text-emerald-600"
                      : "text-slate-700"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="mt-3 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
          >
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}