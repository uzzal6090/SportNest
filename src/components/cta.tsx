import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-emerald-900 px-6 py-16 text-center text-white sm:px-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lime-400/20 blur-3xl" />

          <h2 className="relative text-3xl font-bold sm:text-4xl">
            Ready to Book Your Next Game?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-emerald-100">
            Join thousands of players who found their perfect venue on
            SportNest. Your next match is just a few clicks away.
          </p>

          <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-lime-400 text-slate-900 hover:bg-lime-300"
            >
              <Link href="/facilities">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/login">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}