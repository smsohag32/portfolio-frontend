import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
   return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
         <span className="text-8xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
            404
         </span>
         <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Page Not Found
         </h1>
         <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md">
            The page you are looking for might have been moved, removed, or never existed.
         </p>
         <div className="mt-6 flex items-center gap-3">
            <Link
               href="/"
               className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-400">
               <Home className="h-4 w-4" /> Back to Home
            </Link>
            <Link
               href="/portfolio"
               className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
               <ArrowLeft className="h-4 w-4" /> View Projects
            </Link>
         </div>
      </div>
   );
}
