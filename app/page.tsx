// Home.tsx
"use client"

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Certifs } from "./_components/Certifs";
import { Projects } from "./_components/Projects";
import { ContactEN } from "./_components/ContactEN";

export default function Home() {

  return (
    <body>
      <Header />
      <Hero />
      <Projects />
      <Certifs />
      <ContactEN />
    </body>
  );
}
