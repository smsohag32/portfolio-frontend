"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Sandpack } from "@codesandbox/sandpack-react";

const Playground = () => {
   const [code, setCode] = useState(`console.log("Welcome to the JavaScript Playground!");

function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("Coder"));

// Try modifying this code and check the console!
// Here are some ideas:
// 1. Create an array and use array methods
// 2. Write a simple loop
// 3. Define an object and access its properties`);

   return (
      <div className="min-h-screen pt-20 pb-10 bg-[#fafafa] dark:bg-gray-900">
         <div className="main-container">
            <h1 className="text-4xl md:text-4xl text-center font-medium text-des mb-6">
               {"< JavaScript Playground />"}
            </h1>

            <Card className="w-full overflow-hidden shadow-sm">
               <CardContent className="p-0">
                  <Sandpack
                     template="vanilla"
                     theme="light"
                     files={{
                        "/index.js": code,
                     }}
                     options={{
                        showLineNumbers: true,
                        showTabs: true,
                        editorHeight: 500,
                        autorun: true,
                        showConsoleButton: false,

                        showConsole: true,
                     }}
                     customSetup={{
                        entry: "/index.js",
                     }}
                  />
               </CardContent>
            </Card>
         </div>
      </div>
   );
};

export default Playground;
