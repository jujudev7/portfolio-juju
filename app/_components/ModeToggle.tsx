import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const logoImg = document.querySelector(".logo") as HTMLImageElement;
    const textArea = document.querySelector("textarea") as HTMLElement;
    const allInputs = document.querySelectorAll("input");
    const submitBtn = document.querySelector(".submit") as HTMLElement;

    if (isDarkMode) {
      document.body.classList.remove("dark");
      logoImg.src = "/j.svg";
      textArea.style.backgroundColor = "#fff";
      allInputs.forEach((input) => {
        input.style.backgroundColor = "#fff";
      });
      submitBtn.style.backgroundColor = "#fff";
      submitBtn.style.color = "#7C3AED";
      submitBtn.addEventListener("mouseover", function () {
        submitBtn.style.backgroundColor = "#030712";
        submitBtn.style.color = "#fff";
      });
    } else {
      document.body.classList.add("dark");
      logoImg.src = "/j-dark.svg";
      textArea.style.backgroundColor = "#030712";
      allInputs.forEach((input) => {
        input.style.backgroundColor = "#030712";
      });
      submitBtn.style.backgroundColor = "#030712";
      submitBtn.style.color = "#fff";
      submitBtn.addEventListener("mouseover", function () {
        submitBtn.style.backgroundColor = "#fff";
        submitBtn.style.color = "#7C3AED";
      });

      submitBtn.addEventListener("mouseout", function () {
        submitBtn.style.backgroundColor = "#030712";
        submitBtn.style.color = "#fff";
      });
    }
  };

  return (
    <>
      <Button onClick={toggleTheme}>
        {isDarkMode ? (
          <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all" />
        ) : (
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        )}
      </Button>
    </>
  );
}
