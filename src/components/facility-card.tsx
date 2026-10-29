import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Facility } from "@/lib/data";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div
        className={`relative h-52 overflow-hidden bg-gradient-to-br ${facility.gradient}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={facility.image}
          alt={facility.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <Badge className="absolute left-3 top-3 bg-emerald-600 text-white hover:bg-emerald-600">
          {facility.sport}
        </Badge>

        <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-emerald-700 shadow">
          ${facility.price}
          <span className="text-xs font-normal text-slate-500"> /hr</span>
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight text-slate-900">
            {facility.name}
          </h3>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-sm font-semibold text-amber-700">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            {facility.rating}
          </span>
        </div>

        <p className="flex items-center gap-1 text-sm text-slate-500">
          <MapPin className="h-4 w-4 text-emerald-600" />
          {facility.location}
          <span className="ml-auto text-xs">({facility.reviews} reviews)</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {facility.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          asChild
          className="mt-2 w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
        >
          <Link href={`/facilities/${facility.id}`}>Book Now</Link>
        </Button>
      </div>
    </div>
  );
}