import {
  mobile,
  backend,
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
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  nextauth,
  socialSphere,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact Me",
  },
];

const services = [
  {
    title: "Forensic Scientist",
    icon: web,
  },
  {
    title: "Content Creator",
    icon: mobile,
  },
  {
    title: "Artistic Painter",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Photography",
    icon: git,
  },
  {
    name: "Videography",
    icon: html,
  },
  {
    name: "Painting",
    icon: css,
  },
  {
    name: "Investigation",
    icon: nodejs,
  },
  {
    name: "Fingerprinting",
    icon: mongodb,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    name: "Hawk Eye Forensic",
    description:
      "Cyber Forensic Investigation & an Internationally Accredited Training & Research Center",
    features: [
      "Trainee",
      "Training in Questioned documents and fingerprints examination",
    ],
    tags: [
      {
        name: "Trainee",
        color: "orange-text-gradient",
      },
      {
        name: "Questioned Documents & Fingerprints",
        color: "blue-text-gradient",
      },
    ],
    image: inkSync,
    live_link: "https://www.hawkeyeforensic.com/",
  },
  {
    name: "flamingcolours",
    description:
      "A🥀 Love artist colours?🎨 , then it is a site for colour your artistic therapy✨",
    features: [
      "_flamingcolours_ Paintings & Arts",
      "Most Artistic works you have probably never seen before",
    ],
    tags: [
      {
        name: "Paintings",
        color: "pink-text-gradient",
      },
      {
        name: "Arts",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    live_link: "https://flamingcolours.lovestoblog.com",
  },
  {
    name: "random_tasveerein_",
    description: "🥀 Random snippets from a phone!",
    features: [
      "Curated pictures of best sceneries i came across the road-trips....",
    ],
    tags: [
      {
        name: "Photography",
        color: "blue-text-gradient",
      },
      {
        name: "Videography",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    live_link: "https://www.instagram.com/random_tasveerein_/",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
