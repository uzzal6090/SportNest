import Link from "next/link";
import { Mail, MapPin, Phone, Trophy } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/facilities", label: "All Facilities" },
  { href: "/login", label: "Login" },
];

const sportLinks = ["Football", "Basketball", "Cricket", "Badminton", "Tennis"];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600">
              <Trophy className="h-5 w-5" />
            </span>
            Sport<span className="text-emerald-500">Nest</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            The easiest way to discover and book sports facilities near you.
            Play more, plan less.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-emerald-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Popular Sports</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {sportLinks.map((s) => (
              <li key={s}>
                <Link href="/facilities" className="hover:text-emerald-400">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-500" /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-500" /> +880 1234 567 890
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-500" /> hello@sportnest.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SportNest. All rights reserved.
      </div>
    </footer>
  );
}