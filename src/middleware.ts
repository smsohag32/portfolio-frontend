import { NextRequest, NextResponse } from "next/server";

const getCookie = (req: NextRequest, name: string): string | null => {
   const cookieHeader = req.headers.get("cookie");
   if (!cookieHeader) return null;

   const cookies = cookieHeader
      .split("; ")
      .map((c) => c.split("="))
      .reduce((acc, [key, value]) => {
         acc[key] = decodeURIComponent(value);
         return acc;
      }, {} as Record<string, string>);

   return cookies[name] || null;
};

export async function middleware(req: NextRequest) {
   const { pathname } = req.nextUrl;
   const userInfoCookie = getCookie(req, "sohag");

   // Redirect to home if no cookie
   if (!userInfoCookie) {
      return NextResponse.redirect(new URL("/", req.url));
   }

   try {
      const userInfo = JSON.parse(userInfoCookie);
      const isAdminPath = pathname.startsWith("/dashboard/sohag");

      if (isAdminPath && userInfo?.role !== "admin") {
         return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
   } catch (error) {
      console.error("Error parsing cookie:", error);
      return NextResponse.redirect(new URL("/", req.url));
   }
}

export const config = {
   matcher: ["/dashboard/:path*"],
};
