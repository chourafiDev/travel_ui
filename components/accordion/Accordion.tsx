"use client";

import { useState } from "react";
import Reveal from "../ui/Reveal";
import { accordions } from "@/utils/data";
import Item from "./Item";

const Accordion = () => {
  const [showId, setShowId] = useState<number | boolean | null>(0);

  const handleShow = (id: number) => {
    if (showId === id) {
      return setShowId(null);
    }
    setShowId(id);
  };

  return (
    <>
      <Reveal>
        <div className="w-full flex flex-col gap-0">
          {accordions.map((item, id) => {
            const { question, answer } = item;
            return (
              <div className="bg-darkcolor p-2 rounded-md" key={id}>
                <Item
                  question={question}
                  answer={answer}
                  id={id}
                  show={showId === id}
                  onShow={handleShow}
                ></Item>
              </div>
            );
          })}
        </div>
      </Reveal>
    </>
  );
};

export default Accordion;
