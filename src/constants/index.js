import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  
  
  {
    name: "git",
    icon: git,
  },
 
  
];

const experiences = [
  {
    title: "AI Engineer Intern",
    company_name: "Radical AI",
    icon: mobile,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Developed an AI-powered tutoring platform using Langchain, ChromaDB, and Streamlit.",
      "Implemented NLP models to personalize user experience and improve engagement.",
      "Collaborated with cross-functional teams to deploy and optimize ML models in production.",
      "Achieved 25% faster query response times compared to traditional systems.",
    ],
  },
  {
    title: "Data Entry Manager Intern",
    company_name: "Sodexo",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "May 2023 - February 2024",
    points: [
      "Automated data workflows using Python, reducing manual effort by over 10 hours/week.",
      "Implemented data quality control checks, lowering error rates by 15%.",
      "Ensured high data integrity for downstream analytics and reporting systems.",
      "Managed internal data tools and collaborated with administrative teams for reporting.",
    ],
  },
  {
    title: "Full Stack Developer (Project)",
    company_name: "StockTrack Pro",
    icon: mobile,
    iconBg: "#383E56",
    date: "Jan 2024 - Apr 2024",
    points: [
      "Built an inventory management system with React, JavaScript, and Agile practices.",
      "Implemented user authentication, search/filter features, and responsive UI design.",
      "Improved inventory efficiency by 30% and reduced manual errors by 20%.",
      "Collaborated with a cross-functional team to deliver a scalable web solution.",
    ],
  },
  {
    title: "3D Website Developer (Project)",
    company_name: "Portfolio",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Ongoing",
    points: [
      "Designed and developed an interactive 3D website using React, Three.js, and Tailwind CSS.",
      "Achieved 15% faster load times and 90% user satisfaction through optimization and testing.",
      "Integrated animations and dynamic visuals to enhance user engagement.",
      "Continuously improving site performance and responsiveness across devices.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "Leul brought our tutoring platform idea to life with AI integration that exceeded expectations. The project was delivered ahead of time and with impressive attention to detail.",
    name: "Project Supervisor",
    designation: "AI Engineer",
    company: "Radical AI",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Leul's work on our inventory system dramatically improved our operations. His UI was sleek, and his logic handled our complex needs smoothly.",
    name: "Team Member",
    designation: "Project Collaborator",
    company: "StockTrack Pro",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Leul's 3D website design pushed the limits of web interactivity. It’s rare to see such technical skill paired with a strong design sense.",
    name: "Professor Johnson",
    designation: "Faculty Advisor",
    company: "Dakota State University",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];


  
  const projects = [
    {
      name: "AI-Powered Tutoring Platform",
      description:"A smart tutoring system built with Langchain, ChromaDB, and Streamlit that uses NLP to personalize user interactions and reduce query response times by 25%.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "strealit",
          color: "green-text-gradient",
        },
        
      ],
      image:web ,
      source_code_link: "https://github.com/Leul888",
    },
    {
      name: "StockTrack Pro",
      description:
        "Inventory management system built using JavaScript and React to streamline operations, improve efficiency by 30%, and reduce manual errors by 20%.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "agile",
          color: "pink-text-gradient",
        },
      ],
      image: mobile,
      source_code_link: "https://github.com/Leul888", 
    },
    {
      name: "Library Management System",
      description:
        "A desktop application developed in C# to manage library inventory, member records, book check-ins/outs, and due date tracking for improved operational efficiency.",
      tags: [
        {
          name: "csharp",
          color: "blue-text-gradient",
        },
        {
          name: "windowsforms",
          color: "green-text-gradient",
        },
        {
          name: "desktopapp",
          color: "pink-text-gradient",
        },
      ],
      image: web, 
      source_code_link: "https://github.com/Leul888",
    }
  
  ];
  


export { services, technologies, experiences, testimonials, projects };
