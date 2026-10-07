"use client";

import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import { TerminalSquare } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const defaultCode = `// Welcome to the Live JavaScript Playground!
console.log("🚀 Initializing JavaScript Environment...");

const engineer = {
  name: "Mohammad Sohag Sheik",
  role: "Full Stack Engineer",
  experienceYears: 3,
  skills: ["React", "Next.js", "TypeScript", "Node.js", "Express.js"],
  isOpenToOpportunities: true
};

function getSummary(profile) {
  return \`\${profile.name} (\${profile.role}) - \${profile.experienceYears}+ Years Exp.\`;
}

console.log(getSummary(engineer));
console.log("Skills:", engineer.skills.join(" • "));
`;

const Playground = () => {
   const [code] = useState(defaultCode);

   return (
      <section className="relative min-h-screen overflow-hidden bg-slate-50/50 pb-24 pt-28 dark:bg-slate-950/50">
         {/* Ambient Glow */}
         <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[140px]" />

         <div className="main-container relative">
            <SectionHeading
               as="h1"
               badge="Live Editor"
               icon={TerminalSquare}
               title="JavaScript"
               highlight="Playground"
               description="Write, run, and test JavaScript snippets directly in your browser with real-time console execution."
            />

            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900">
               {/* Terminal Window Header Bar */}
               <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/70 px-6 py-3 dark:border-slate-800 dark:bg-slate-950/70">
                  <div className="flex items-center gap-2">
                     <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                     <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                     <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                     <span className="ml-3 font-mono text-xs text-slate-500 dark:text-slate-400">
                        playground.js
                     </span>
                  </div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                     Interactive Sandpack Console
                  </span>
               </div>

               <Sandpack
                  template="vanilla"
                  theme="auto"
                  files={{
                     "/index.js": code,
                  }}
                  options={{
                     showLineNumbers: true,
                     showTabs: true,
                     editorHeight: 520,
                     autorun: true,
                     showConsoleButton: false,
                     showConsole: true,
                  }}
                  customSetup={{
                     entry: "/index.js",
                  }}
               />
            </div>
         </div>
      </section>
   );
};

export default Playground;
