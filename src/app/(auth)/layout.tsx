import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "Login - Sohag Sheik",
   description: "",
};

export default function AuthLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <div>
         <div className="min-h-[65vh]">{children}</div>
      </div>
   );
}
