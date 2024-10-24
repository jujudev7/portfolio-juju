// components/Stack.tsx
import Image from "next/image";
import React from "react";

interface StackItem {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
}

const stackItems: StackItem[] = [
  {
    name: "React",
    src: "/logos/react-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "Next.js",
    src: "/logos/nextjs-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo nextjs",
  },
  {
    name: "JavaScript",
    src: "/logos/javascript-original.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "TypeScript",
    src: "/logos/typescript-original.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "Tailwind",
    src: "/logos/tailwind-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "Bootstrap",
    src: "/logos/bootstrap-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "HTML",
    src: "/logos/html5-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
  {
    name: "CSS",
    src: "/logos/css3-original-wordmark.svg",
    width: 128,
    height: 128,
    className: "logo",
  },
];

const Stack: React.FC = () => {
  return (
    <section className="scroller max-w-5xl mx-auto">
      <div className="track my-1">
        {stackItems.map((item, index) => (
          <div key={index} className="item">
            <Image
              src={item.src}
              alt={item.name}
              width={item.width}
              height={item.height}
              className={item.className}
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
              className={item.className}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
