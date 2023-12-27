"use client";

import Reveal from "../ui/Reveal";
import Image from "next/image";
import { career, darkLike, like } from "@/utils/assets";
import { useTheme } from "next-themes";

const Banner3 = () => {
  const { theme } = useTheme();

  return (
    <section className="relative flex lg:flex-row flex-col lg:items-center items-start mb-16 gap-10 dark:bg-dark-4 bg-[#F7F7F7] lg:px-20 md:px-12 px-3 py-12">
      <div className="flex-1">
        <Reveal>
          <h1 className="dark:text-white text-dark font-semibold text-[2.5rem] tracking-wide leading-[50px]">
            Renforcez les rouages de votre entreprise dès maintenant !
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray mt-8 mb-6">
            Crafting personalized journeys that blend adventure and culture, our
            agency invites the excited traveler to explore unforgettable
            moments. Join us in curating experiences that resonate with your
            unique interests and passions.
          </p>
        </Reveal>

        <Reveal>
          <button className="btn bg-gradient bg-gradient-hover">
            Découvrir Plus
          </button>
        </Reveal>
      </div>
      <div className="flex-1 w-full h-[350px] relative rounded-4 overflow-hidden">
        <Image
          src={career}
          alt="careers"
          fill
          quality={100}
          className="w-full h-full object-cover absolute"
        />
      </div>

      <Image
        src={theme === "dark" ? darkLike : like}
        alt="like"
        width={80}
        height={80}
        className="absolute bottom-16 right-[60%] opacity-10"
      />
    </section>
  );
};

export default Banner3;
