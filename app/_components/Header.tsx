import { Section } from "./Section";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = document.getElementById(targetId!);

    if (targetElement) {
      // Vérification si targetElement n'est pas null
      const offset = -100;
      const targetPosition = targetElement.offsetTop + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section className="header flex justify-between items-center sticky top-0 z-10 pb-2">
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
          <Link
            className="menu-link"
            href="#certifications"
            onClick={handleScroll}
          >
            Certifs
          </Link>
          <Link className="menu-link" href="#contact" onClick={handleScroll}>
            Contact
          </Link>
        </ul>
        <ModeToggle />
    </Section>
  );
};
