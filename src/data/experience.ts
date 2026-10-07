import p2m from "@/assets/experience/p2m.png";
import netcafe from "@/assets/experience/netcafe.png";
import type { StaticImageData } from "next/image";

export interface ExperienceItem {
   id: number;
   title: string;
   company: string;
   duration: string;
   location?: string;
   img: StaticImageData;
   highlights: string[];
   skills: string[];
   current?: boolean;
}

export const experiences: ExperienceItem[] = [
   {
      id: 1,
      title: "Associate Software Engineer (Front-End)",
      company: "Project 2morrow Software Ltd.",
      duration: "Jan 2024 - Present",
      location: "Dhaka, Bangladesh",
      img: p2m,
      highlights: [
         "Engineered a high-density loan recovery analytics dashboard (Loan Back) with real-time KPI metrics and automated PTP tracking workflows.",
         "Developed a multi-step batch processing UI (Bulk Pro) to automate operations for thousands of accounts simultaneously with real-time trackers.",
         "Architected a drag-and-drop agenda management module and embedded document viewer for paperless meetings (Board Flow).",
         "Built an executive-grade MIS dashboard (C PANEL) featuring dynamic reporting widgets and OCR document upload panels.",
         "Developed an enterprise Fraud Risk Management platform (TAP FRAUD) for real-time banking fraud detection with interactive Recharts dashboards.",
      ],
      skills: [
         "React.js",
         "Next.js",
         "TypeScript",
         "Redux Toolkit",
         "RTK Query",
         "Recharts",
         "Tailwind CSS",
         "REST APIs",
         "WebSockets",
      ],
      current: true,
   },
   {
      id: 2,
      title: "Network Engineer",
      company: "Net Cafe Internet",
      duration: "Dec 2022 - Aug 2023",
      location: "Dhaka, Bangladesh",
      img: netcafe,
      highlights: [
         "Monitored and maintained network infrastructure, ensuring 99.9% uptime and uninterrupted connectivity.",
         "Efficiently troubleshot hardware and software issues, reducing system downtime and improving customer satisfaction.",
         "Managed routing, switching, and bandwidth distribution for optimal network performance.",
      ],
      skills: [
         "Network Infrastructure",
         "Network Monitoring",
         "Troubleshooting",
         "Hardware Maintenance",
         "System Support",
      ],
      current: false,
   },
];
