import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Penna | Portfolio",
  description: "Développeur frontend - React JS, Next.js, JavaScript, HTML/CSS, Frontend Developper React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-background text-foreground">
      <body>{children}</body>
    </html>
  );
}
