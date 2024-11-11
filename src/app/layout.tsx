import type { Metadata } from "next";
import {Nunito, Nunito_Sans} from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const nunito = Nunito({
  subsets:['latin'],
  variable: "--font-nunito",
  display:"swap",
});
const nunitoSans = Nunito_Sans({
  subsets:['latin'],
  variable: "--font-nunito-sans",
  display:"swap",
});

export const metadata: Metadata = {
  title: "Inflation Creations",
  description: "business website that sells balloon arches, balloon installations, bounce houses, and other party decorations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(nunito.variable, nunitoSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
