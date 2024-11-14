import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistFlecha = localFont({
   src: "./fonts/Flecha.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

export const metadata: Metadata = {
   title: "Sohag Sheik - Full Stack Engineer",
   description: "",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={` ${geistFlecha.variable} antialiased`}>{children}</body>
      </html>
   );
}
