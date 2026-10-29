import FacilityCard from "@/components/facility-card";
import SectionHeading from "@/components/section-heading";
import { facilities } from "@/lib/data";

export const metadata = { title: "All Facilities | SportNest" };

export default function FacilitiesPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="All Facilities"
          title="Find Your Perfect Venue"
          description="Browse every court, turf and pool available on SportNest."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}