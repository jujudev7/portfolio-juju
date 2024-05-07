import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      submitBtn.addEventListener("mouseout", function () {
        submitBtn.style.backgroundColor = "#fff";
        submitBtn.style.color = "#7C3AED";
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
    <Button
      onClick={toggleTheme}
      className={`mode-btn pl-5 pr-5 transition duration-700 border border-transparent hover:border hover:border-violet-600 ${isDarkMode ? 'hover:bg-white' : 'hover:bg-gray-950'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isDarkMode ? (
        <div className="relative">
          <MoonIcon
            style={{ transform: isHovered ? "scale(0)" : "scale(1)" }}
            className="absolute top-[-10px] left-[-9.5px] h-[1.2rem] w-[1.2rem] transition-transform duration-800 ease-in-out"
          />
          <SunIcon
            style={{ transform: isHovered ? "scale(1)" : "scale(0)" }}
            className="text-violet-600 font-bold absolute top-[-10px] left-[-9.5px] h-[1.2rem] w-[1.2rem] transition-transform duration-800 ease-in-out"
          />
        </div>
      ) : (
        <div className="relative">
          <SunIcon
            style={{ transform: isHovered ? "scale(0)" : "scale(1)" }}
            className="absolute top-[-10px] left-[-9.5px] h-[1.2rem] w-[1.2rem] transition-transform duration-800 ease-in-out"
          />
          <MoonIcon
            style={{ transform: isHovered ? "scale(1)" : "scale(0)" }}
            className="absolute top-[-10px] left-[-9.5px] h-[1.2rem] w-[1.2rem] transition-transform duration-800 ease-in-out"
          />
        </div>
      )}
    </Button>
  );
}
