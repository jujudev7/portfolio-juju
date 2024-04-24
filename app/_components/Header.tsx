import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = -100; // Ajustez le décalage négatif selon vos besoins
    const targetPosition = targetElement.offsetTop + offset;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <Section className="flex justify-between items-center sticky top-0 bg-white z-10 pb-2">
      <Link href="" className="pl-2">
        <img src="j.svg" alt="logo jujudev7.com" className="w-10 mt-2" />
      </Link>
      <ul className="menu space-x-10">
        <Link className="menu-link" href="#about" onClick={handleScroll}>
          About
        </Link>
        <Link className="menu-link" href="#projects" onClick={handleScroll}>
          Projects
        </Link>
        <Link className="menu-link" href="#certifications" onClick={handleScroll}>
          Certifs
        </Link>
        <Link className="menu-link" href="#contact" onClick={handleScroll}>
          Contact
        </Link>
      </ul>
      <ul className="flex gap-4">
        <Link href="https://github.com/jujudev7" target="_blank">
          <GithubIcon size={32} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dev-web-front-end-julien-penna/"
          target="_blank"
          className="pr-2"
        >
          <LinkedinIcon size={32} />
        </Link>
      </ul>
    </Section>
  );
};
