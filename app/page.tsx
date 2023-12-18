import Banner from "@/components/home/Banner";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Accordions from "@/components/accordion/Accordions";
import Image from "next/image";
import { imageCities } from "@/utils/assets";
import Link from "next/link";
import Brands from "@/components/home/Brands";

export default async function Page() {
  return (
    <main className="">
      <Banner />
      <About />
      <Brands />
      <Testimonials />
      <Accordions />

      <div className="relative w-full h-56">
        <Image
          src={imageCities}
          alt="cities"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </main>
  );
}
