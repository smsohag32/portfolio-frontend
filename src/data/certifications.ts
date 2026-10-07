export interface Certification {
   id: string;
   title: string;
   issuer: string;
   issueDate: string;
   credentialId: string;
   credentialUrl: string;
   skills: string[];
   badgeText?: string;
}

export const certifications: Certification[] = [
   {
      id: "1",
      title: "Master Full Stack Web Development With Games and Application",
      issuer: "Udemy",
      issueDate: "Mar 2026",
      credentialId: "UC-7b81184c-49ef-457b-83a0-e34e2ea946f4",
      credentialUrl: "https://www.udemy.com/certificate/UC-7b81184c-49ef-457b-83a0-e34e2ea946f4/",
      skills: ["Front-End Development", "REST APIs", "Full Stack", "Interactive Apps"],
      badgeText: "Full Stack",
   },
   {
      id: "2",
      title: "JavaScript Master Course From Beginner to Expert Developer",
      issuer: "Udemy",
      issueDate: "Jul 2025",
      credentialId: "UC-e7b3ccc9-2c3c-425e-83ed-83dbeb09891c",
      credentialUrl: "https://www.udemy.com/certificate/UC-e7b3ccc9-2c3c-425e-83ed-83dbeb09891c/",
      skills: ["JavaScript", "ES6+", "Async Programming", "Core Engineering"],
      badgeText: "JS Expert",
   },
   {
      id: "3",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      issueDate: "Jul 2025",
      credentialId: "fccff1616f2-f8da-4802-b620-28aa94bf5aae-jaads",
      credentialUrl:
         "https://www.freecodecamp.org/certification/fccff1616f2-f8da-4802-b620-28aa94bf5aae/javascript-algorithms-and-data-structures-v8",
      skills: ["JavaScript", "Algorithms", "Data Structures", "CSS"],
      badgeText: "Algorithms",
   },
   {
      id: "4",
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issueDate: "Jul 2025",
      credentialId: "fccff1616f2-f8da-4802-b620-28aa94bf5aae-rwd",
      credentialUrl:
         "https://www.freecodecamp.org/certification/fccff1616f2-f8da-4802-b620-28aa94bf5aae/responsive-web-design",
      skills: ["HTML5", "CSS3", "Flexbox & Grid", "Responsive Design"],
      badgeText: "UI / UX",
   },
];
