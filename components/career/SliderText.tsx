"use client";

import Marquee from "react-fast-marquee";

const SliderText = () => {
  return (
    <Marquee pauseOnHover autoFill speed={110}>
      <p className="flex gap-2 mr-8 font-extrabold text-[35px]">
        <span className="text-stroke text-dark">Elite</span>
        <span className="text-gradient">Travel</span>
      </p>
    </Marquee>
  );
};

export default SliderText;
