import BottomContact from "@/components/ui/BottomContact";
import Divider from "@/components/ui/Divider";
// import ParallaxText from "@/components/ui/ParallaxText";
import Reveal from "@/components/ui/Reveal";

import Services from "@/components/elements/Services";
import Team from "@/components/elements/Team";
import Banner3 from "@/components/elements/Banner-3";
import { Metadata } from "next";
import SliderText from "@/components/career/SliderText";

export const metadata: Metadata = {
  title: "Elite Travel | Career",
};

const page = () => {
  return (
    <main>
      <Banner3 />

      <div className="mb-20">
        <SliderText />
      </div>

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

export default page;
