import { useState, useEffect, FC } from "react";
import anime from "animejs";
import Image from "next/image";
import { darkLogo, lightLogo } from "@/utils/assets";

interface SplashScreenProps {
  finishingLoading: any;
}

const SplashScreen: FC<SplashScreenProps> = ({ finishingLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: finishingLoading(),
    });

    loader
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
      })
      .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      // isMounted={isMounted}
      className="flex h-screen items-center justify-center bg-gradient"
    >
      {/* SplashScreen */}
      <Image
        id="logo"
        src={darkLogo}
        alt="logo"
        width={200}
        height={100}
        className="move-updown"
      />
    </div>
  );
};

export default SplashScreen;
