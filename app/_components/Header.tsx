import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <Section className="flex justify-between items-center sticky top-0 bg-white z-10 pb-2">
        <Link href="">
          <img src="j.svg" alt="logo jujudev7.com" className="w-10 mt-2" />
        </Link>
        <ul className="menu space-x-10">
          <Link className="menu-link" href="#about">
            About
          </Link>
          <Link className="menu-link" href="#projects">
            Projects
          </Link>
          <Link className="menu-link" href="#certifications">
            Certifs
          </Link>
          <Link className="menu-link" href="#projects">
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
          >
            <LinkedinIcon size={32} />
          </Link>
        </ul>
    </Section>
  );
};
