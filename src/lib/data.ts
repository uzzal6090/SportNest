export type Sport = {
  id: number;
  name: string;
  emoji: string;
  venues: number;
};

export type Facility = {
  id: number;
  name: string;
  sport: string;
  location: string;
  price: number; // per hour
  rating: number;
  reviews: number;
  gradient: string;
  image: string;
  tags: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const sports: Sport[] = [
  { id: 1, name: "Football", emoji: "⚽", venues: 42 },
  { id: 2, name: "Basketball", emoji: "🏀", venues: 28 },
  { id: 3, name: "Cricket", emoji: "🏏", venues: 35 },
  { id: 4, name: "Badminton", emoji: "🏸", venues: 31 },
  { id: 5, name: "Tennis", emoji: "🎾", venues: 19 },
  { id: 6, name: "Swimming", emoji: "🏊", venues: 14 },
];

export const facilities: Facility[] = [
  {
    id: 1,
    name: "Green Arena Turf",
    sport: "Football",
    location: "Gulshan, Dhaka",
    price: 40,
    rating: 4.8,
    reviews: 214,
    gradient: "from-emerald-500 to-green-700",
    image: "https://loremflickr.com/800/600/football,stadium?lock=1",
    tags: ["Floodlights", "Parking"],
  },
  {
    id: 2,
    name: "Slam Dunk Court",
    sport: "Basketball",
    location: "Banani, Dhaka",
    price: 30,
    rating: 4.6,
    reviews: 132,
    gradient: "from-orange-500 to-red-600",
    image: "https://loremflickr.com/800/600/basketball,court?lock=2",
    tags: ["Indoor", "Showers"],
  },
  {
    id: 3,
    name: "Smash Badminton Hall",
    sport: "Badminton",
    location: "Dhanmondi, Dhaka",
    price: 15,
    rating: 4.9,
    reviews: 301,
    gradient: "from-sky-500 to-indigo-600",
    image: "https://loremflickr.com/800/600/badminton?lock=3",
    tags: ["AC", "Pro Courts"],
  },
  {
    id: 4,
    name: "Royal Cricket Nets",
    sport: "Cricket",
    location: "Uttara, Dhaka",
    price: 25,
    rating: 4.5,
    reviews: 98,
    gradient: "from-amber-500 to-yellow-700",
    image: "https://loremflickr.com/800/600/cricket,pitch?lock=4",
    tags: ["Bowling Machine", "Coaching"],
  },
  {
    id: 5,
    name: "Ace Tennis Club",
    sport: "Tennis",
    location: "Bashundhara, Dhaka",
    price: 35,
    rating: 4.7,
    reviews: 76,
    gradient: "from-lime-500 to-teal-600",
    image: "https://loremflickr.com/800/600/tennis,court?lock=5",
    tags: ["Clay Court", "Equipment"],
  },
  {
    id: 6,
    name: "Aqua Pulse Pool",
    sport: "Swimming",
    location: "Mirpur, Dhaka",
    price: 20,
    rating: 4.4,
    reviews: 87,
    gradient: "from-cyan-500 to-blue-700",
    image: "https://loremflickr.com/800/600/swimming,pool?lock=6",
    tags: ["Olympic Size", "Lockers"],
  },
];

export const features = [
  {
    title: "Instant Booking",
    description:
      "Pick a venue, choose a time slot and confirm in under a minute. No calls, no waiting.",
    icon: "Zap",
  },
  {
    title: "Verified Facilities",
    description:
      "Every venue is checked for quality, safety and accurate photos before it goes live.",
    icon: "ShieldCheck",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Transparent hourly pricing with no hidden fees. Find it cheaper and we will match it.",
    icon: "BadgeDollarSign",
  },
  {
    title: "Play With Friends",
    description:
      "Split the cost, invite your team and manage the whole group from one place.",
    icon: "Users",
  },
  {
    title: "Easy Cancellation",
    description:
      "Plans change. Cancel or reschedule free of charge up to 24 hours before your slot.",
    icon: "CalendarClock",
  },
  {
    title: "24/7 Support",
    description:
      "Our team is always ready to help with bookings, payments or venue issues.",
    icon: "Headphones",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rafiq Ahmed",
    role: "Football Captain",
    quote:
      "SportNest made booking our weekly match so easy. The turf was spotless and the slot was ready exactly on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Badminton Player",
    quote:
      "I love how simple it is to find a court near me. Prices are clear and I never have to call anyone anymore.",
    rating: 5,
  },
  {
    id: 3,
    name: "Tanvir Hasan",
    role: "Cricket Coach",
    quote:
      "I book nets for my academy every week. The scheduling tools save me hours and the venues are top quality.",
    rating: 4,
  },
];

export const stats = [
  { label: "Facilities", value: "250+" },
  { label: "Active Players", value: "12K+" },
  { label: "Bookings Made", value: "80K+" },
  { label: "Cities", value: "8" },
];