"use client";

import BottomContact from "@/components/ui/BottomContact";
import Divider from "@/components/ui/Divider";
import ParallaxText from "@/components/ui/ParallaxText";
import Reveal from "@/components/ui/Reveal";

import Services from "@/components/elements/Services";
import Team from "@/components/elements/Team";
import Banner3 from "@/components/elements/Banner-3";

const Page = () => {
  return (
    <main>
      <Banner3 />

      <Reveal>
        <section className="relative pb-24">
          <ParallaxText baseVelocity={-5}>
            <p className="flex gap-2 mr-8 font-extrabold text-[35px]">
              <span className="text-stroke text-dark">Elite</span>
              <span className="text-gradient">Travel</span>
            </p>
          </ParallaxText>
        </section>
      </Reveal>

      <div className="flex justify-center mb-6">
        <Divider />
      </div>

      <Team />

      <div className="flex justify-center mb-6">
        <Divider />
      </div>

      <Services />

      <BottomContact />
    </main>
  );
};

export default Page;
