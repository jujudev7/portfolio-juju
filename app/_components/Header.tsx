import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  useEffect(() => {
    const contactLink = document.querySelector(".contact-link");

    if (contactLink) {
      contactLink.innerHTML =
        "<div><span>" +
        contactLink.textContent!.trim().split("").join("</span><span>") +
        "</span></div>";
    }
  }, []); // Utiliser une dépendance vide pour s'assurer que le code ne s'exécute qu'une fois après le rendu initial

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);

    if (targetElement) {
      const offset = -100;
      const targetPosition = targetElement.offsetTop + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="header bg-white w-full sticky top-0 pt-2 z-10 max-w-screen-lg mx-auto">
      <div className="zone-menu flex justify-between items-center sticky top-0 z-10">
        <Link href="/">
          <Image
            src="/j.svg"
            alt="J, logo julienpenna.com"
            width={32}
            height={32}
            className="logo ml-4 w-10 mt-2"
          />
        </Link>
        <ul className="menu flex space-x-8">
          <li>
            <Link
              className="about-link menu-link"
              href="#about"
              onClick={handleScroll}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              className="projects-link menu-link"
              href="#projects"
              onClick={handleScroll}
            >
              <span className="text">Projets</span>
              <span className="marquee">Projets</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-link certifs-link certifs-link--gooey"
              href="#certifications"
              onClick={handleScroll}
            >
              Certifs
              <div className="certifs-link__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="contact-link menu-link"
              href="#contact"
              onClick={handleScroll}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <SwitchLanguage /> */}
        <ModeToggle />
      </div>
    </div>
  );
};
