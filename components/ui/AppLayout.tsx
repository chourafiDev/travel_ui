"use client";

import Providers from "@/utils/providers";
import { usePathname } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ThemeSwitch from "./ThemeSwitcher";

interface AppLayoutProps {
  children: React.ReactNode;
  locale: string;
}

const AppLayout: FC<AppLayoutProps> = ({ children, locale }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);
  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishingLoading={() => setIsLoading(false)} />
      ) : (
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ThemeSwitch />
        </Providers>
      )}
    </>
  );
};

export default AppLayout;
