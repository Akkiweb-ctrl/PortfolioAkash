import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2.2 years of hands-on experience, I have honed my skills in front-end technologies like React and Tailwind, as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2.2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Aug-2022 - Present",
    role: "Software Engineer",
    company: "Volkswagen IT Services, India",
    description: `Developed and maintained a web application using React. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "MongoDB", "NodeJs"],
  },
  {
    year: "Apr-2022 - Jul-2022",
    role: "Associate Software Engineer (Internship)",
    company: "Coditas",
    description: `Worked closely with variuos teams acquiring practical knowledge in React and Postman for API testing.     Assisted in development of web applications, contributing to codebase improvements and bugfixes. Implemented clean code approach and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "Postman API"],
  }
];

export const PROJECTS = [
  {
    title: "BlackCabs: A corporate cab booking application",
    image: project1,
    description:
      "A fully functional cab booking website with features like booking cab in advance for a month or more, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Recoil"],
    link: "https://black-cabs-frontend.vercel.app/",
    deployed: false
  },
  {
    title: "PixlBlog: A blog making app",
    image: project2,
    description:
      "An platform for creating and publishing blogs, with features such as rich text editing and displaying.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Recoil"],
    link: "#",
    deployed: false

  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind"],
    link: "#",
    deployed: true
  },
  {
    title: "PayTM clone",
    image: project4,
    description:
      "A Paytm clone, featuring core functionalities for digital payments and transactions, similar to orignal app",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Recoil"],
    link: "#",
    deployed: false

  },
];

export const CONTACT = {
  address: "Pune, India",
  phoneNo: "+91 9527250304 ",
  email: "rananawareakash001@gmail.com",
};