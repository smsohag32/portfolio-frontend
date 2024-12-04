import fluency from "@/assets/projects/fluency.webp";
import sports from "@/assets/projects/sports.webp";
import hc from "@/assets/projects/hc.webp";
export const projects = [
   {
      id: 3,
      name: "FluencyMastery",
      image: [fluency],
      category: "Full-Stack",
      type: "Language Learning Website",
      description:
         "FluencyMastery is a web application that focuses on language learning website. It is Full Stack Web Application. I build in this project user-friendly responsive and in three type users can login fluency mastery website",
      features: [
         {
            title: "User Authentication",
            details: "Login and Register system and 3 types of users.",
         },
         { title: "Admin Dashboard", details: "Admin can manage users and courses." },
         { title: "Role Management", details: "Admin role users can manage instructor statuses." },
         {
            title: "Approved Courses",
            details: "Only approved courses render on the public pages.",
         },
      ],
      link: {
         server: "https://github.com/smsohag32/fluencyMastery-server",
         client: "https://github.com/smsohag32/fluency-mastery-client",
         live: "https://fluencymastery-849ec.web.app/",
      },
      technologies: [
         "HTML",
         "Tailwind Css",
         "ReactJs",
         "JavaScript",
         "Firebase",
         "Payment Getway",
         "Jwt",
         "ExpressJs",
         "MongoDB",
      ],
   },
   {
      id: 4,
      name: "Health Care",
      image: [hc],
      category: "ReactJs, Full-Stack, Javascript",
      type: "Ecommerce Website",
      description:
         "SportsHaven is a dynamic, full-stack web application designed to meet the needs of sports enthusiasts, athletes, and organizations.",
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
   {
      id: 4,
      name: "Sports Haven",
      image: [sports],
      category: "ReactJs, Full-Stack, Javascript",
      type: "Ecommerce Website",
      description:
         "SportsHaven is a dynamic, full-stack web application designed to meet the needs of sports enthusiasts, athletes, and organizations.",
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
