import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline">
        <h1>jujudev7.com</h1>
        <div className="flex-1"></div>
        <div>
          {/* <Button className="size-6"></Button> */}
          <Button className="size-6">Test</Button>
        </div>
      </Section>
    </header>
  );
};
