import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const header = document.querySelector(".header") as HTMLElement; // Assertion de type
    const textArea = document.querySelector("textarea") as HTMLElement; // Assertion de type
    const allInputs = document.querySelectorAll("input");

    if (isDarkMode) {
      document.body.classList.remove("dark");
      if (header) {
        header.style.backgroundColor = "#fff";
        textArea.style.backgroundColor = "#fff";
        allInputs.forEach(input => {
          input.style.backgroundColor = "#fff";
        });
      }
    } else {
      document.body.classList.add("dark");
      if (header) {
        header.style.backgroundColor = "#030712"; 
        textArea.style.backgroundColor = "#030712";
        allInputs.forEach(input => {
          input.style.backgroundColor = "#030712";
        });
      }
    }
};

  return (
    <Button onClick={toggleTheme} className="mr-2">
      {isDarkMode ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
    </Button>
  );
}
