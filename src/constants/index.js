import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  mongodb,
  docker,
  capgemini,
  tcs,
  hsbc,
  enphase,
  carrent,
  jobit,
  tripguide,
  mysql,
  java,
  aws,
  kubernetes,
  springboot,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Technical Lead",
    icon: mobile,
  },
  {
    title: "Cloud Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Technical Lead",
    company_name: "Enphase Energy",
    icon: enphase,
    iconBg: "#E6DEDD",
    date: "July 2021 - Present",
    points: [
      "Technical lead for team of software engineers to develop RESTful core platform API.",
      "Designed, implemented the development for core platform API and continuously-delivered microservice architecture in AWS with Docker, Kubernetes and scaled to 10 million req/hr.",
      "Designed, implemented, tested the Spring cloud gateway, scaled to handle entire API traffic of company.",
      "Architected, implemented live stream using Server Sent Events.",
      "Piloted Webhook notifications as serverless architecture using Kafka stream data processing",
      "Proof of concept on data platform design to handle traffic using Apache pulsar, Timeseries database",
      "Acted as Scrum master; lead backlog grooming, sprint planning, sprint review in an Agile methodology",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "HSBC",
    icon: hsbc,
    iconBg: "#383E56",
    date: "August 2018 - June 2021",
    points: [
      "Technical lead for a team of 8 software engineers to handle multiple applications under compliance and Regulatory. – Designed the GCMS legacy application with microservice architecture.",
      "Optimised the conflict search for CMO users to check conflict of interest within deals using elastic search.",
      "Acted as Scrum master; lead backlog grooming, sprint planning, sprint review in an Agile methodology"
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "August 2016 - August 2018",
    points: [
      "Worked for HSBC project and was insourced by HSBC in Aug 2018",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "TCS",
    icon: tcs,
    iconBg: "#383E56",
    date: "December 2009 - August 2016",
    points: [
      "Worked for 3 clients with TCS. Role and Responsibility was to develop and maintain the applications using Spring, Angular JS, Core Java, JSP, JavaScript, Ajax, Hibernate",
      "General Electric (FDM): Enhanced application features.",
      "Suzlon (SAVVION): Developed applications to handle invoicing of Suzlon.",
      "Vodafone (UPSS): Handled Operations and Configuration for VAS services"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I have worked closely with Guneet for almost 2 years in the GCMS project in HSBC. Guneet has presented leadership skills and managed his IT POD/team to deliver critical system functionality on a timely basis and going above and beyond to ensure quality delivery . Due to Guneet's excellent experience and willing to help everyone, he became the GO TO person to solve any complex issues the project faced and especially during migrating the old heritage 19YO system to the strategic one. It was pleasure working with Guneet and i'm sure he will shine in any position he takes.",
    name: "Hany Richi",
    designation: "Senior Business Analyst",
    company: "HSBC"
    //image: "",
  },
  {
    testimonial:
      "Guneet is an amazing leader and team player. He has in-depth knowledge and understanding of various technical areas such as Java , React. He is a friendly, calm and focused teammate to work with. ",
    name: "Yashica Gautam",
    designation: "Java software Engineer",
    company: "Adyen"
  },
  {
    testimonial:
      "Guneet is very proficient in multiple technologies and has good hands on experience with building scalable services and web apps for enterprise. He is a calm and focused leader with a systematic and a lead by example delivery orientation.",
    name: "Robinson Lobo",
    designation: "Lead software engineer",
    company: "Cognizant"
  },
  {
    testimonial:
    "I've collaborated with Guneet on Github projects. As a full stack developer he has provided various front end, backend solutions for different use cases. He's shown an inclination to learn new technologies from time to time. He will be a very good asset to any team.",
    name: "Rohit Diwakar",
    designation: "VP, Cloud Architect",
    company: "JPMorgan Chase & Co."
  },
  {
    testimonial:
    "Guneet is a pleasure to have architectural discussions with. Every solution he gives, reflects the rich experience he has had and is complete from back and front end sides. He isy go to person to get my queries resolved related to any issues related to full stack platforms, technologies, concepts.",
    name: "Kushal L",
    designation: "CEO",
    company: "travee.ai"
  },
  {
    testimonial:
    "Guneet has Tremendous potential and dedication on achieving a goal. Excellent skills and ability to learn technology. I had the opportunity to work with Guneet in couple of project and he has proved to be an asset. One of very few people who have zeal to go an extra mile and add value in work environment to make things better.",
    name: "Bharat Talreja",
    designation: "Program Manager",
    company: "HSBC"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials };
