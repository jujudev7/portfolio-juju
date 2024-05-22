import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Penna | Portfolio",
  description:
    "Développeur frontend - React JS, Next.js, JavaScript, HTML/CSS, Frontend Developper React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full bg-background text-foreground">
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <body>{children}</body>
    </html>
  );
}
