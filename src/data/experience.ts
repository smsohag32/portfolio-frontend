import p2m from "@/assets/experience/p2m.png";
import netcafe from "@/assets/experience/netcafe.png";

export const experiences = [
   {
      id: 1,
      title: "Junior Software Engineer (Front-End)",
      company: "Project 2morrow Software Ltd.",
      duration: "Jan 2024 - Present",
      img: p2m,
      description:
         "As a Frontend Engineer, I build responsive, user-focused interfaces for fintech and large-scale applications, ensuring scalability and performance. I've contributed to impactful projects like 'Bulk Pro,' used by a prominent bank, and 'Let's Meet,' a meeting management automation solution. My work reflects a commitment to delivering reliable and intuitive solutions.",
      skills: [
         "React",
         "Next.js",
         "TypeScript",
         "Responsive Design",
         "Performance Optimization",
         "Fintech",
         "Large-scale Applications",
      ],
      current: true,
   },
   {
      id: 2,
      title: "Network Engineer",
      company: "Net Cafe Internet",
      duration: "Dec 2022 - Aug 2023",
      img: netcafe,
      description:
         "Monitored and maintained network infrastructure, ensuring uninterrupted internet connectivity. Efficiently troubleshot hardware and software issues, contributing to seamless operations and improved user experience.",
      skills: [
         "Network Infrastructure",
         "Network Monitoring",
         "Troubleshooting",
         "Hardware Maintenance",
         "Software Maintenance",
      ],
   },
];
