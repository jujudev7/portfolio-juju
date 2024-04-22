import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Penna | Portfolio",
  description: "Frontend Developper React, JavaScript, HTML/CSS",
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
