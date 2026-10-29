import Banner from "@/components/banner";
import PopularSports from "@/components/popular-sports";
import FeaturedFacilities from "@/components/featured-facilities";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";

export default function HomePage() {
  return (
    <>
      <Banner />
      <PopularSports />
      <FeaturedFacilities />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  );
}