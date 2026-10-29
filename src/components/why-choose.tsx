import {
  BadgeDollarSign,
  CalendarClock,
  Headphones,
  ShieldCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/section-heading";
import { features } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  Zap,
  ShieldCheck,
  BadgeDollarSign,
  Users,
  CalendarClock,
  Headphones,
};

export default function WhyChoose() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why SportNest"
          title="Why Choose SportNest"
          description="Everything you need to find, book and enjoy your game, in one place."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = icons[feature.icon] ?? Zap;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border p-6 transition-colors hover:border-emerald-500"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}