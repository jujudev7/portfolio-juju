import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

// export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const poppins = Poppins({ subsets: ['latin'], weight: '400', });
 
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
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

