import { darkLogo, lightLogo } from "@/utils/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navlogo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? lightLogo : darkLogo}
        alt="logo"
        width={180}
        height={100}
      />
    </Link>
  );
};

export default Navlogo;
