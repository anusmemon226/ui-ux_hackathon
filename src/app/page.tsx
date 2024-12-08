import Hero from "@/app/sections/Hero";
import BrowseRange from "./sections/BrowseRange";
import OurProducts from "./sections/OurProducts";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <BrowseRange/>
      <OurProducts/>
      <WhyUs/>
    </div>
  );
}
