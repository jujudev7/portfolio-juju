import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark");
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = "#fff"; 
      }
    } else {
      document.body.classList.add("dark");
      const header = document.querySelector("header");
      if (header) {
        header.style.backgroundColor = "#030712"; 
      }
    }
  };

  return (
    <Button onClick={toggleTheme}>
      {isDarkMode ? (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
      ) : (
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
    </Button>
  );
}
