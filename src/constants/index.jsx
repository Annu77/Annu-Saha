import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";
import project10 from "../assets/project10.png"
import photoshop from "../assets/Background.png";
import illustrator from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import afterEffects from "../assets/ae.png";
import premierPro from "../assets/pr.png";
import ibisPaintX from "../assets/ibispaint.png";
import canva from "../assets/canva.png";
import sketchbook from "../assets/SKETCHBOOK.png";
import InDesign from "../assets/Adobe_InDesign_CC_icon.svg.png";

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
    title: "Print Design",
    description:
      "A collection of print-ready designs tailored for marketing and communication needs. Featuring clean layouts, sharp visuals, and vibrant colors, these designs bring ideas to life on paper.",
    techStack: [
      "Illustrator",
      "Photoshop",
      "Canva",
      "Indesign",
      "Sketchbook",
      "IbisPaintX",
    ],
    imgSrc: project1,
    link: "https://drive.google.com/drive/folders/1uj3RCQBXzaIsdBUMlEg0m8w2_1eY717k?usp=drive_link",
  },
  {
    id: 2,
    title: "Brochures & Presentations",
    description:
      "A collection of well-structured, visually appealing brochures and presentations designed to communicate information effectively. Balanced layouts, engaging visuals, and clean typography ensure clarity and professionalism.",
    techStack: ["Canva", "Indesign"],
    imgSrc: project2,
    link: "https://drive.google.com/drive/folders/1zr34tVpNMXP6zHdjQxMgapbOU73g82un?usp=drive_link",
  },
  {
    id: 3,
    title: "Posters",
    description:
      "A series of attention-grabbing posters designed for events, campaigns, and branding purposes. The use of bold visuals, compelling typography, and balanced composition ensures maximum impact.",
    techStack: [
      "Illustrator",
      "Photoshop",
      "Canva",
      "Sketchbook",
      "IbisPaintX",
    ],
    imgSrc: project3,
    link: "https://drive.google.com/drive/folders/1zLqIZg2AviuOXxg7HqLS4qPv6WZ60kvb?usp=drive_link",
  },
  {
    id: 4,
    title: "Banners & Standees",
    description:
      "A collection of visually striking designs crafted for events and promotions. Featuring bold typography, vibrant colors, and clean layouts, these designs ensure maximum visibility and impact, perfect for both indoor and outdoor displays.",
    techStack: ["Illustrator", "Photoshop"],
    imgSrc: project4,
    link: "https://drive.google.com/drive/folders/1-wvNgBMmzpczzrNyF2qQNRDO79ou7WNM?usp=sharing",
  },
  {
    id: 5,
    title: "Social Media Creatives",
    description:
      "A series of eye-catching designs tailored for digital platforms. These creatives utilize vibrant colors, trendy aesthetics, and engaging content to enhance brand presence and audience interaction.",
    techStack: ["Illustrator", "Photoshop", "Canva"],
    imgSrc: project5,
    link: "https://drive.google.com/drive/folders/1CBvz12sfec3fwiwJq-FE4Nft2wPjFm6q?usp=drive_link",
  },
  {
    id: 6,
    title: "Digital Art",
    description:
      "A showcase of imaginative and visually stunning digital artworks. Combining creative concepts, detailed illustrations, and artistic techniques, this collection highlights a unique approach to storytelling and expression.",
    techStack: ["Illustrator", "Sketchbook", "IbisPaintX"],
    imgSrc: project6,
    link: "https://drive.google.com/drive/folders/10S3BJGQn__W5UJ3ZCZX6aCvLhQI1zL6V?usp=drive_link",
  },
  {
    id: 7,
    title: "Logo Design",
    description:
      "A collection of unique and impactful font-based logo designs. Each piece focuses on creative typography, clean layouts, and stylistic lettering to deliver a simple yet powerful visual identity.",
    techStack: ["Illustrator", "Photoshop", "Sketchbook", "IbisPaintX"],
    imgSrc: project7,
    link: "https://drive.google.com/drive/folders/1XrC1m4QsuZFDFiRIlclrpfCgKb--4jCN?usp=drive_link",
  },
  {
    id: 8,
    title: "Merchandise",
    description:
      "Custom designs created for merchandise like apparel, accessories. These designs are versatile, bold, and trendy, making them ideal for personal use or branding.",
    techStack: ["Illustrator", "Photoshop", "Sketchbook", "IbisPaintX"],
    imgSrc: project8,
    link: "https://drive.google.com/drive/folders/1X--Xc2g51R1wGbQO_L7dqDXL-hvvHuQx?usp=drive_link",
  },
  {
    id: 9,
    title: "Website Design",
    description:
      "A showcase of user-friendly and visually appealing website designs. Focuses on clean layouts, intuitive navigation, and engaging aesthetics to enhance user experience and functionality.",
    techStack: ["Illustrator", "Photoshop", "Canva"],
    imgSrc: project9,
    link: "https://drive.google.com/drive/folders/102ELqPxPdTGGdm4_D1vQEc4_2RFSWic8?usp=drive_link",
  },
  {
    id: 10,
    title: "Video Editing",
    description:
      "A collection of dynamic and engaging video edits crafted to captivate audiences. Featuring seamless transitions, precise cuts, and creative visual effects, these projects showcase storytelling through motion. Perfectly tailored for promotional content, social media, and branding, each edit ensures a compelling viewer experience.",
    techStack: ["Premier Pro", "After Effects", "Canva"],
    imgSrc: project10,
    link: "https://drive.google.com/drive/folders/16zY01hrWZfympmNcL65_8MgL7ZrkKv3A?usp=drive_link",
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
  },
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
    techStack: [
      "Canva",
      "InDesign",
      "Sketchbook",
      "Ibis Paint X",
      "Premier Pro",
      "Photoshop",
      "Illustrator",
      "After Effects",
    ],
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
    description: "",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "National High School, Kolkata",
    duration: "2017 - 2020",
    description: "",
  },
];
