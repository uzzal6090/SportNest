import Link from "next/link";
import { ArrowRight, CheckCircle2, Trophy } from "lucide-react";

// Background photo. Nijer photo use korte chaile public/banner.jpg e rekhe "/banner.jpg" likho
const BANNER_IMAGE = "https://loremflickr.com/1920/1080/football,grass,turf?lock=11";

const stats = [
  { value: "500+", label: "Facilities" },
  { value: "10K+", label: "Bookings" },
  { value: "6", label: "Sports" },
  { value: "4.9★", label: "Rating" },
];

export default function Banner() {
  return (
    <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-emerald-900">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={BANNER_IMAGE}
        alt="Football turf"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-900/60 to-emerald-900/80" />

      {/* Floating chip: left */}
      <div className="absolute left-6 top-24 hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md lg:flex">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
        500+ Active Facilities
      </div>

      {/* Floating chip: right */}
      <div className="absolute bottom-24 right-6 hidden items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md lg:flex">
        <CheckCircle2 className="h-4 w-4 text-green-400" />
        10,000+ Bookings Made
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/20 px-4 py-1.5 text-sm font-medium text-green-300 backdrop-blur">
          <Trophy className="h-4 w-4" />
          #1 Sports Booking Platform
        </span>

        <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Book Your
          <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
            Perfect Court
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
          Discover and reserve premium sports facilities — football turfs,
          badminton courts, swimming lanes, and more. Instant booking, zero
          hassle.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/facilities"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-colors hover:bg-green-500"
          >
            Explore Facilities <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Get Started Free
          </Link>
        </div>

        {/* Stats */}
        <dl className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dd className="text-2xl font-bold text-white sm:text-3xl">
                {s.value}
              </dd>
              <dt className="text-xs text-slate-300">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}