import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import Link from "next/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline">
        <h1>jujudev7.com</h1>
        <div className="flex-1"></div>
        <div>
          <Button className="size-6 p-0"></Button>
          <Link href="https://github.com/jujudev7" target="_blank">
            <GithubIcon size={32} />
            <LinkedinIcon size={32} />
          </Link>
        </div>
      </Section>
    </header>
  );
};
