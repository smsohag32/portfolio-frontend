import sports from "@/assets/projects/sports.webp";
import hc from "@/assets/projects/hc.webp";

export const projects = [
   {
      id: 4,
      name: "Health Care",
      image: ["", hc],
      category: "ReactJs, Full-Stack, JavaScript",
      type: "Hospital Management Web Application",
      description:
         "Health Care is a comprehensive web application designed for hospital management. It offers a range of features including patient appointment scheduling, doctor portals, and administrative control. The system is built to streamline hospital operations, improve patient care, and enhance communication between patients, doctors, and administrators.",
      features: [
         { title: "Authentication", details: "Secure user authentication using Firebase and JWT." },
         {
            title: "Patient Appointment Scheduling",
            details: "Patients can book and manage appointments with doctors.",
         },
         {
            title: "Doctor's Portal",
            details: "Doctors can manage appointments and view patient records.",
         },
         {
            title: "Admin Dashboard",
            details: "Admins can manage hospital operations and user roles.",
         },
         {
            title: "Reports and Analytics",
            details: "Provides insights into hospital performance through analytics.",
         },
      ],
      link: {
         server: "https://github.com/smsohag32/sports-haven-backend",
         client: "https://github.com/smsohag32/sports-haven-frontend",
         live: "https://healthcare-8a91b.web.app/",
      },
      technologies: [
         "HTML",
         "CSS",
         "JavaScript",
         "React.js",
         "Tailwind CSS",
         "shadcn UI component library",
         "Node.js",
         "Express.js",
         "MongoDB",
         "Mongoose",
         "JWT",
         "SSL Commerz",
      ],
   },
   {
      id: 5,
      name: "Sports Haven",
      image: [sports],
      category: "ReactJs, Full-Stack, Javascript",
      type: "Ecommerce Website",
      description:
         "Sports Haven is a dynamic, full-stack web application designed to meet the needs of sports enthusiasts, athletes, and organizations.",
      features: [
         { title: "Authentication", details: "Secure user authentication using Firebase." },
         {
            title: "Admin Dashboard",
            details: "Full management of products with add, update, and delete.",
         },
         {
            title: "Product Management",
            details: "Admins can add product details like name, price, and images.",
         },
         { title: "Shopping Cart", details: "Cart system for adding and purchasing products." },
      ],
      link: {
         server: "https://github.com/smsohag32/sports-haven-backend",
         client: "https://github.com/smsohag32/sports-haven-frontend",
         live: "https://sportshaven-40393.web.app/",
      },
      technologies: [
         "HTML",
         "Tailwind Css",
         "React Js",
         "Firebase",
         "JavaScript",
         "Express Js",
         "MongoDB",
      ],
   },
];
