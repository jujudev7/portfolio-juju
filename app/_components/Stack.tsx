// components/Stack.tsx
import Image from "next/image";
import React from "react";

interface StackItem {
  name: string;
  src: string;
  width: number;
  height: number;
}

const stackItems: StackItem[] = [
  {
    name: "React",
    src: "/logos/react-original-wordmark.svg",
    width: 128,
    height: 128,
  },
  {
    name: "Next.js",
    src: "/logos/nextjs-original-wordmark.svg",
    width: 128,
    height: 128,
  },
  {
    name: "JavaScript",
    src: "/logos/javascript-original.svg",
    width: 128,
    height: 128,
  },
  {
    name: "TypeScript",
    src: "/logos/typescript-original.svg",
    width: 128,
    height: 128,
  },
  {
    name: "Tailwind",
    src: "/logos/tailwind-original-wordmark.svg",
    width: 128,
    height: 128,
  },
  {
    name: "Bootstrap",
    src: "/logos/bootstrap-original-wordmark.svg",
    width: 128,
    height: 128,
  },
  {
    name: "HTML",
    src: "/logos/html5-original-wordmark.svg",
    width: 128,
    height: 128,
  },
  {
    name: "CSS",
    src: "/logos/css3-original-wordmark.svg",
    width: 128,
    height: 128,
  },
];

const Stack: React.FC = () => {
  return (
    <section className="scroller max-w-5xl mx-auto">
      <div className="track">
        {stackItems.map((item, index) => (
          <div key={index} className="item">
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className="logo"
            />
          </div>
        ))}
        {stackItems.map((item, index) => (
          <div key={index + stackItems.length} className="item">
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className="logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
