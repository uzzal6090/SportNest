import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FacilityCard from "@/components/facility-card";
import SectionHeading from "@/components/section-heading";
import { facilities } from "@/lib/data";

export default function FeaturedFacilities() {
  const featured = facilities.slice(0, 3);

  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Facilities"
          title="Top-Rated Venues This Week"
          description="Hand-picked facilities loved by our community of players."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/facilities">
              View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}