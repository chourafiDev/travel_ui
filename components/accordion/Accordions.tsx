"use client";

import { accordions } from "@/utils/data";
import React, { useState } from "react";
import Accordion from "./Accordion";
import Reveal from "@/components/ui/Reveal";

const Accordions = () => {
  return (
    <section
      id="accordions"
      className="grid lg:grid-cols-2 md:grid-cols-1 gap-10 lg:px-20 md:px-12 px-3 py-16 -mt-20"
    >
      <div className="my-auto">
        <Reveal>
          <h1 className="dark:text-white text-dark text-5xl font-semibold mb-4">
            Your Questions
          </h1>
        </Reveal>

        <Reveal>
          <h1 className="text-gradient text-5xl font-semibold">Answered ?</h1>
        </Reveal>

        <Reveal>
          <p className="text-gray mt-10">
            Welcome to &apos;Your Questions Answered&apos; where we provide
            expert insights in concise responses. Explore the knowledge hub
            tailored to address your inquiries.
          </p>
        </Reveal>
      </div>
      <Accordion />
    </section>
  );
};

export default Accordions;
