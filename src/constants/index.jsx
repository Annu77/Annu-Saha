import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import photoshop from "../assets/Background.png";
import illustrator from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import afterEffects from "../assets/ae.png";
import premierPro from "../assets/pr.png";
import ibisPaintX from "../assets/ibispaint.png";
import canva from "../assets/canva.png";
import sketchbook from "../assets/SKETCHBOOK.png";
import InDesign from "../assets/Adobe_InDesign_CC_icon.svg.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Annu Saha",
  role: "Graphic Designer",
  subheading:
    "With 3+ years of experience creating impactful visuals across diverse mediums, turning ideas into memorable designs.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "Photoshop",
    imgSrc: photoshop, 
  },
  {
    name: "Illustrator",
    imgSrc: illustrator,
  },
  {
    name: "After Effects",
    imgSrc: afterEffects,
  },
  {
    name: "Premier Pro",
    imgSrc: premierPro,
  },
  {
    name: "Ibis Paint X",
    imgSrc: ibisPaintX,
  },
  {
    name: "Canva",
    imgSrc: canva,
  },
  {
    name: "Sketchbook",
    imgSrc: sketchbook,
  },
  {
    name: "InDesign",
    imgSrc: InDesign,
  }
];

export const EXPERIENCES = [
  {
    yearRange: "2024",
    role: "Graphic Designer",
    company: "Chalo Social",
    description:
      "Designed Amazon creatives, including product images, infographics, and promotional banners, to enhance product visibility and drive sales performance on the platform. Collaborated with the marketing team to develop effective strategies for client campaigns, ensuring cohesive visual storytelling and impactful execution. Delivered high-quality graphic designs tailored to diverse client objectives, contributing to the success of multiple projects within the agency",
    techStack: ["Canva"],
  },
  {
    yearRange: "2023",
    role: "Graphic Designer",
    company: "Tents n Trails",
    description:
      "Conceptualized and designed visual assets, including banners, posters, and promotional materials, to enhance the brand's outdoor adventure appeal. Developed creative marketing collateral for social media campaigns, increasing engagement and brand visibility. Collaborated with the team to ensure cohesive storytelling across print and digital platforms. Focused on producing high-quality, customer-centric designs that resonated with the adventurous spirit of the brand.",
    techStack: ["Canva", "InDesign", "Sketchbook", "Ibis Paint X", "Premier Pro", "Photoshop", "Illustrator", "After Effects"],
  },
  {
    yearRange: "------",
    role: "Logo Design Freelance",
    company: "Sanskar Spoken English",
    description:
      "Conceptualized and designed the official logo, reflecting the brand’s mission and enhancing visual identity across digital platforms. Ensured a clean, modern, and versatile design, adaptable for use in web, print, and social media",
    techStack: ["Illustrator", "Photoshop"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "National Institute of Technology, Durgapur",
    duration: "2021-2025",
    description:
      "",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "National High School, Kolkata",
    duration: "2017 - 2020",
    description:
      "",
  },
];

