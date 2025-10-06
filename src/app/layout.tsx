import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const montserratARM = localFont({
  src: [
    {
      path: "./fonts/Montserratarm-SemiBold.woff",
      weight: "600",
      style: "semibold",
    },
  ],
  variable: "--font-montserrat-arm",
});

export const metadata: Metadata = {
  title: "Հարսանյաց հրավիրատոմս",
  description: "Հրավիրում ենք Ձեզ Արտակի և Աշխենի հարսանյաց արարողությանը",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratARM.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
