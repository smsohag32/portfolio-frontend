import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";

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
      <div>
         <Header />
         {children}
         <Footer />
      </div>
   );
}
