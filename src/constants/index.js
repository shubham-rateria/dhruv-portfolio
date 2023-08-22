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
  python,
  algorithm,
  huggingFace,
  ml,
  colab,
  sql,
  cplus,
  cpluslus,
  jupyterNotebook,
  matlab,
  numpy,
  scikit,
  nlp,
  ai,
  chatgpt,
  vscode,
  msoffice,
  movierecommendationjpeg,
  aichatbot,
  mobilebanking,
  penningdownsuccess,
  ginesys,
  coldpress,
  ganesham
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "About",
  // },
  
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Product Analyst",
    icon: backend,
  },
  {
    title: "Tech Product Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpluslus,
  },
  {
    name: "C#",
    icon: cplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Jupyter Notebook",
    icon: jupyterNotebook,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "Data Structures & Algorithms",
    icon: algorithm,
  },
  {
    name: "MS-Office",
    icon: msoffice,
  },
  {
    name: "Google Colab",
    icon: colab,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HuggingFace",
    icon: huggingFace,
  },
  {
    name: "Sci-Kit",
    icon: scikit,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Natural Language Processing",
    icon: nlp,
  },
  {
    name: "Chat-GPT",
    icon: chatgpt,
  },
  {
    name: "AI",
    icon: ai,
  },
  {
    name: "Visual Studio Code",
    icon: vscode,
  },
];

const experiences = [
  
  {
    title: "Developer Relations Intern",
    company_name: "ColdPress.AI",
    icon: coldpress,
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Synthesizing a marketing approach to create awareness of the company’s creative dataset services",
      "Researching the targeted community and commencing engagement in the related domains",      
    ],
  },
  {
    title: "Product Manager Intern",
    company_name: "Ginesys One",
    icon: ginesys,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Drafted SRS document to aid addition of a new function & developed use cases and test cases for the module.",
      "Collaborated with cross-functional teams. ",
      "Flowcharts and document creation for business product along with user product analysis.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Ganesham Securities Pvt Ltd",
    icon: ganesham,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Applied various techniques to analyse & interpret large-scale financial data from multiple sources",
      "Improved client satisfaction by 7% & reduced operational costs by 2%.",
    ],
  },
  {
    title: "Project Manager & Co-Founder",
    company_name: "Penning Down Success",
    icon: penningdownsuccess,
    iconBg: "#383E56",
    date: "April 2020 - Feb 2021",
    points: [
      "Initiated contact with 15+ emerging artists to conduct interviews and showcase their stories, causing a 40% increase in viewership.",
      "20% growth in follower engagement within 4 months by implementing a marketing strategy.",
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
    name: "Suicide Detection AI Chatbot",
    description:
      "Engineered an AI chatbot post-training LSTM, CNN, Logit, ELECTRA models that achieved a highest 97% accuracy rate in detecting suicidal behavior, resulting in a potential 24/7 resource for mental health support.", 
      tags: [
      {
        name: "MachineLearning",
        color: "blue-text-gradient",
      },
      {
        name: "Chatbot",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
      {
        name: "MentalHealth",
        color: "green-text-gradient",
      },
    ],
    image: aichatbot,
    source_code_link: "https://github.com/dhruvladia/Suicide-Detection-Chatbot",
  },
  {
    name: "Emotion-Based Movie Recommendation System",
    description:
      "A Python-based Movie recommender system that launches the camera to capture the facial expression of the user to determine their emotion and recommends movie according to their mood.",
      tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "recommendationSystems",
        color: "green-text-gradient",
      },
      {
        name: "computerVision",
        color: "pink-text-gradient",
      },
    ],
    image: movierecommendationjpeg,
    source_code_link: "https://github.com/dhruvladia/Emotion-Based-Movie-Recommendation-System",
  },
  {
    name: "Mobile Banking Application",
    description:
      "A Software Engineering & Project Management (SEPM) implementation developed using Flutter and enables money transactions. Key features of the application – Send, Receive, Check Balance.",
      tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "softwareEnginering",
        color: "green-text-gradient",
      },
      {
        name: "mobileApplication",
        color: "pink-text-gradient",
      },
    ],
    image: mobilebanking,
    source_code_link: "https://github.com/dhruvladia/BankingApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
