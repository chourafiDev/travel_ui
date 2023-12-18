import "./globals.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import AppLayout from "@/components/ui/AppLayout";
import ScrollLinked from "@/components/ui/ScrollLinked";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elite Travel",
  description:
    "Embark on unforgettable journeys with our travel agency. Personalized experiences, expert planning, and unique adventures await. Explore the world your way.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang="en" className={jost.className}>
      <head>
        <link rel="icon" href="/assets/imgs/favicon.png" sizes="any" />
      </head>
      <body className="dark:bg-[#171717] bg-[#F7F7F7]">
        <ScrollLinked />
        <AppLayout locale={locale}>{children} </AppLayout>
      </body>
    </html>
  );
}
