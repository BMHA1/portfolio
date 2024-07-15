//CREAR COMPONENT REACT

"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Años de experiencia",
  },
  {
    num: 20,
    text: "Projectos y colaboraciones",
  },
  {
    num: 6,
    text: "Tecnologías dominadas",
  },
  {
    num: 780,
    text: "Commits ejecutados",
  },
];

const Stast = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-6 max-w-[80-vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1  flex gap-4 items-center justify-center xl:justify-start">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`item.text.length < 15 ? max-w-[130px] leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stast;
