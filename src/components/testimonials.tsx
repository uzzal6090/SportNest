import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/section-heading";
import { testimonials } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function Testimonials() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Athletes Say"
          description="Real feedback from players who book with SportNest every week."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.id}>
              <CardContent className="flex h-full flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-emerald-600/40" />

                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < t.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-3 border-t pt-4">
                  <Avatar>
                    <AvatarFallback className="bg-emerald-600 text-white">
                      {initials(t.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}