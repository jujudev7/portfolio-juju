// Home.tsx
"use client";

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Certifs } from "./_components/Certifs";
import { Projects } from "./_components/Projects";
import { Contact } from "./_components/Contact";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <body>
      <Header />
      <Hero />
      <Projects />
      <Certifs />
      <Contact />
      <div className="flex justify-center items-center pb-4">
      <span className="flex items-center">
          Développé avec <HeartFilledIcon className="text-violet-600 ml-1 mr-1" /> par Julien
          Penna
        </span>
      </div>
    </body>
  );
}
