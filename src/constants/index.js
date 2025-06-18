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
    starbucks,
    tesla,
    threejs,
    bandage,
    design1,
    design2,
    shoe,
    login,
    crud,
    letter,
    movie,
    droid,
    ayam_studios
  } from "../assets";

  import Orangebitslogo1 from "../assets/company/Orangebitslogo1.png";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
   
    {
      id: "carousel",
      title: "Development",
    },
     {
      id: "design",
      title: "Design",
    },
    {
      id: "videoediting",
      title: "Editing",
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
      title: "FrontEnd Developer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Orangebits Software Technologies (India) Pvt Ltd",
      icon: Orangebitslogo1,
      iconBg: "#383E56",
      date: "August 2024 - Ongoing",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
    {
      title: "React Developer Intern",
      company_name: "Sajal Technologies",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "February 2024 - July 2024 ( 6 months )",
      points: [
        "Collaborated with cross-functional teams to design, develop, and implement scalable web applications using React and JavaScript.",
        "Wrote clean, maintainable, and efficient code following best practices.",
        "Conducted unit testing, integration testing, and end-to-end testing to ensure software quality and reliability.",
        "Investigated and debugged issues, providing timely and effective solutions.",
        "Documented technical specifications and code changes.",
      ],
    },
  
    {
      title: "Fullstack Developer Internship",
      company_name: "Vigo Technoworld",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2023 - February 2024 ( 7 months )",
      points: [
        "Developed and deployed full-stack applications using modern web technologies including the MERN stack.",
        "Collaborated on projects to enhance both frontend and backend functionalities.",
        "Implemented RESTful APIs and integrated third-party services.",
        "Assisted in deploying applications to various environments, including development, staging, and production.",
      ],
    },

     {
      title: "Video Editor | Drone Pilot | Animator | Data Processor",
      company_name: "Droid Mining Solutions",
      icon: droid,
      iconBg: "#383E56",
      date: "February 2022 - August 2023 ( 1.9 years )",
     points: [
  "Edited high-quality videos for marketing, documentation, and internal training using Adobe Premiere Pro and After Effects.",
  "Operated drones for aerial surveys, inspections, and promotional footage, ensuring compliance with local regulations and safety standards.",
  "Created 2D/3D animations to visualize mining processes and technical concepts, enhancing client understanding and engagement.",
  "Processed large datasets including video, aerial imagery, and sensor data to support decision-making and reporting.",
  "Collaborated with cross-functional teams to produce multimedia content tailored to project requirements and client needs.",
  "Managed media assets and maintained an organized archive system for efficient retrieval and future use.",
],
    },

     {
      title: "3D Animator",
      company_name: "Ayam Animation Studios",
      icon: ayam_studios,
      iconBg: "#383E56",
      date: "January 2018 - February 2019 ( 1.2 years )",
      points: [
  "Designed and animated 3D characters, props, and environments using industry-standard software such as Autodesk Maya and Blender.",
  "Collaborated with storyboard artists and directors to translate scripts into compelling animated sequences.",
  "Implemented keyframe animation and motion capture cleanup for character and object movements.",
  "Optimized 3D assets and animations for performance and visual quality across multiple formats and platforms.",
  "Participated in team reviews and provided feedback to maintain animation quality and consistency with the studio's visual style.",
  "Worked closely with rigging and lighting teams to ensure smooth pipeline integration and final rendering output.",
],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Letters Craft",
      description:
        "Developed a language translation website using React and Tailwind CSS with interactive sliders and dynamic email integration.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: letter,
      source_code_link: "https://letters-craft-git-main-mohitharne-gmailcoms-projects.vercel.app/",
    },
    {
      name: "Bandage",
      description:
        "Created a responsive shopping website with React and Tailwind CSS, featuring real-time product data and robust cart management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: bandage,
      source_code_link: "https://bandage-ivory.vercel.app/",
    },
    {
      name: "Sneakiss",
      description:
        "Built a dynamic shoe marketplace with React, integrating API data and interactive UI components for an enhanced user experience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shoe,
      source_code_link: "https://shoe-git-main-mohitharne-gmailcoms-projects.vercel.app/",
    },
    {
      name: "MoviesFlix",
      description:
        "Developed a movie and web series review site with React, utilizing Axios for API data and Redux for efficient state management.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: movie,
      source_code_link: "https://movie-site-git-main-mohitharne-gmailcoms-projects.vercel.app/",
    },
    {
      name: "Login-Emoji",
      description:
        "Designed an interactive login page with dynamic emoji eye movements and password visibility toggle, styled with Tailwind.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: login,
      source_code_link: "https://login-git-main-mohitharne-gmailcoms-projects.vercel.app/",
    },
     {
      name: "CRUD - App",
      description:
        "Designed an interactive login page with dynamic emoji eye movements and password visibility toggle, styled with Tailwind.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://next-crud-three.vercel.app/",
    },
  ];

   const video_projects = [
    {
      name: "Drone Survey Video",
      description:
        "Drone Survey Video for Highway Construction Project, showcasing aerial footage and detailed analysis.",
      tags: [
        {
          name: "Premire Pro",
          color: "blue-text-gradient",
        },
        {
          name: "After Effects",
          color: "pink-text-gradient",
        },
      ],
     
      video: "https://www.youtube.com/watch?v=waIRVjfVKkU&ab_channel=mohitharne",
      source_code_link: "https://www.youtube.com/watch?v=waIRVjfVKkU&ab_channel=mohitharne",
    },
   {
      name: "Construction Site Progress",
      description:
        "Aerial footage of a construction site, highlighting progress and key milestones.",
      tags: [
        {
          name: "Premire Pro",
          color: "blue-text-gradient",
        },
        {
          name: "Media Encoder",
          color: "pink-text-gradient",
        },
      ],
     
      video: "https://www.youtube.com/watch?v=3Fwne-weeMk",
      source_code_link: "https://www.youtube.com/watch?v=3Fwne-weeMk",
    },
     {
      name: "3D Animated Accident Investigation Video",
      description:
        "Showcasing real-time analysis and detailed reporting",
      tags: [
        {
          name: "Premire Pro",
          color: "blue-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
      ],
     
      video: "https://www.youtube.com/watch?v=CoF1vPRoifA",
      source_code_link: "https://www.youtube.com/watch?v=CoF1vPRoifA",
    },
  ];

  const design_projects = [
    
    {
      name: "Real Estate Design",
      description:
        "Designed a modern real estate advertisement with a focus on user engagement and aesthetic appeal, utilizing Figma for UI/UX design.",
      tags: [
        {
          name: "Canva",
          color: "blue-text-gradient",
        },
        
      ],
      image: design1,
      source_code_link: "https://bandage-ivory.vercel.app/",
    },
    {
      name: "Cafe Banner Design",
      description:
        "Designed a vibrant cafe banner with a focus on visual appeal and brand identity, utilizing Figma for UI/UX design.",
      tags: [
        {
          name: "Photoshop",
          color: "blue-text-gradient",
        },
       
      ],
      image: design2,
      source_code_link: "https://shoe-git-main-mohitharne-gmailcoms-projects.vercel.app/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects, video_projects, design_projects };