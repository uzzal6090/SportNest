import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/section-heading";
import { sports } from "@/lib/data";

export default function PopularSports() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Popular Sports"
          title="Choose Your Game"
          description="From the football pitch to the swimming pool, find venues for the sports people book the most."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sports.map((sport) => (
            <Link key={sport.id} href="/facilities">
              <Card className="group h-full transition-all hover:-translate-y-1 hover:border-emerald-500 hover:shadow-lg">
                <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-3xl transition-colors group-hover:bg-emerald-100 dark:bg-emerald-950">
                    {sport.emoji}
                  </span>
                  <h3 className="font-semibold">{sport.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {sport.venues} venues
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}