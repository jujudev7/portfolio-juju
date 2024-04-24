// Home.tsx
"use client"

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Certifs } from "./_components/Certifs";
import { ModeToggle } from "./_components/ModeToggle";
import { Projects } from "./_components/Projects";
import { ContactEN } from "./_components/ContactEN";

export default function Home() {

  return (
    <body>
      <ModeToggle />
      <Header />
      <Hero />
      <Projects />
      <Certifs />
      <ContactEN />
    </body>
  );
}
