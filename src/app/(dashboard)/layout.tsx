import DashboardLayout from "@/components/layout/DashboardLayout";
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
         <DashboardLayout>
            <div className="min-h-[65vh]">{children}</div>
         </DashboardLayout>
      </div>
   );
}
