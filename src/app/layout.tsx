import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Outfit } from "next/font/google";
import { ReduxProvider } from "@/redux-store/ReduxProvider";

const geistFlecha = localFont({
   src: "./fonts/Flecha.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});
const outfit = Outfit({
   weight: ["100", "200", "300", "400", "500", "600", "700"],
   subsets: ["latin"],
   variable: "--font-outfit",
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
         <body className={`${geistFlecha.variable} ${outfit.variable} antialiased`}>
            <ReduxProvider>{children}</ReduxProvider>
         </body>
      </html>
   );
}
