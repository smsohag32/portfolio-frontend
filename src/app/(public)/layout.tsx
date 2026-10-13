import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import "aos/dist/aos.css";
import AOSProvider from "@/Providers/AosProviders";
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
         <AOSProvider>
            <Header />
            <div className="min-h-[65vh]">{children}</div>
            <Footer />
         </AOSProvider>
      </div>
   );
}
