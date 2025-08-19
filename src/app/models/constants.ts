interface HeroDetails {
    name: string;
    title: string;
    description: string;
    image: string;
}

interface AboutContent { 
    description: string[]; 
}

export interface experienceContent{
    year: string,
    role: string,
    company: string,
    description: string,
    technologies: string[]
}
export interface projectType{
    title: string,
    image: string,
    description: string,
    technologies: string[]
}

export const heroDetails: HeroDetails = {
    name: 'Shankar',
    title: 'Full Stack Developer',
    description: 'Experienced Full Stack Web Developer with over 6 years of hands-on experience in building responsive and high-performance web applications. Proficient in front-end technologies such as HTML, CSS, Bootstrap, Tailwind CSS, Sass, Material UI, JavaScript, TypeScript, Angular, WordPress, and Joomla, along with strong back-end expertise in Node.js, Express.js, Fastify, and AWS Lambda. Skilled in developing scalable, maintainable, and user-friendly web solutions. Seeking a Full Stack Developer role to leverage both front-end and back-end capabilities to deliver impactful digital experiences.',
    image: 'assets/profile.jpeg',
}

export const aboutContent: AboutContent = {
description: ['I am a Full Stack Web Developer with 6+ years of experience in building responsive, high-performance web applications. My expertise spans modern front-end technologies like HTML, CSS, Bootstrap, Tailwind CSS, Sass, Material UI, JavaScript, TypeScript, Angular, WordPress, and Joomla, along with strong back-end proficiency in Node.js, Express.js, Fastify, and AWS Lambda. I specialize in creating scalable, maintainable, and user-friendly solutions that seamlessly integrate front-end design with back-end functionality, ensuring performance, security, and accessibility across devices.',
'My journey began with a curiosity for how digital experiences are built, which has evolved into a passion for crafting impactful applications. Over the years, I’ve mentored teams, solved complex technical challenges, and delivered solutions that balance clean code, optimized performance, and modern design. I thrive in collaborative environments where innovation meets quality, and my goal is to create meaningful software that not only works flawlessly but also enhances the way people interact with technology.'
]
} 

export const experience: experienceContent[] = [
    {
        year: "2020 - present",
        role: "Full Stack Developer",
        company: "Codeglo / One Realm India",
        description: "Developed and enhanced multiple web applications using Angular, Node.js, and TypeScript, ensuring maintainable, scalable, and high-performance code. Integrated RESTful APIs with efficient state management and asynchronous programming to deliver seamless UI experiences. Designed reusable Angular components and implemented responsive layouts for optimal performance across devices. Mentored and led a team of three developers, ensuring adherence to best practices and coding standards.",
        technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "Fastify", "REST API", "Tailwind CSS"]
    },
    {
        year: "2019",
        role: "UI Development Intern",
        company: "Codeglo",
        description: "Assisted in building responsive and accessible UI components for internal and client-facing applications. Translated design mockups into high-quality front-end code using HTML, CSS, and JavaScript. Focused on cross-browser compatibility, performance optimization, and mobile-first design principles.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Joomla"]
    }
];

export const projects: projectType[] =  [
    {
        title: "Odin AI Web App",
        image: "assets/odin.png",
        description: "AI-powered web platform enabling intelligent automation and data-driven decision-making.",
        technologies: ["Angular", "Node.js", "Fastify", "TypeScript", "REST API"]
    },
    {
        title: "Get Gorgeous Salon Web App",
        image: "assets/get-gorgeous.png",
        description: "Online salon booking and management platform with seamless UI and secure server-side integration.",
        technologies: ["Angular", "Node.js", "Fastify", "TypeScript", "REST API"]
    },
    {
        title: "Breeze Hotel & Restaurant Web App",
        image: "assets/breeze_brand_logo.svg",
        description: "Hotel and restaurant management solution with responsive design and scalable architecture.",
        technologies: ["Angular", "Node.js", "Express.js", "TypeScript", "REST API"]
    },
    {
        title: "ShipAd Web App",
        image: "assets/shipad.jpeg",
        description: "Online hub connecting you with experts from maritime logistics to maritime legal services.",
        technologies: ["Angular", "TypeScript", "REST API"]
    },
     {
        title: "Wascher Spine Website",
        image: "assets/wascher.png",
        description: "SEO-optimized medical website developed for better visibility and user experience",
        technologies: ["Html", "Css", "Bootstrap", "Bootstrap", "jQuery", "Joomla", "Wordpress"]
    },
    {
        title: "Automation Anywhere Website",
        image: "assets/aa.png",
        description: "Responsive corporate website built with SEO best practices and secure CMS integration.",
        technologies: ["Html", "Css", "Bootstrap", "Bootstrap", "jQuery", "Joomla"]
    },
]