// Home.tsx
"use client";

import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Certifs } from "./_components/Certifs";
import { Contact } from "./_components/Contact";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Projects } from "./_components/Projects";
import Stack from "./_components/Stack";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <Certifs />
      <Contact />
      <div className="flex justify-center items-center pb-4">
        <span className="flex items-center">
          Développé avec{" "}
          <HeartFilledIcon className="text-violet-600 ml-1 mr-1" /> par Julien
          Penna
        </span>
      </div>
    </div>
  );
}
