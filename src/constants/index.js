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
  ganesham,
  futrstudios,
  simplilearn
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
  // {
  //   title: "Software Engineer",
  //   icon: web,
  // },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Product Analyst",
    icon: backend,
  },
  {
    title: "Founder's Office",
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
    title: "Product Associate",
    company_name: "Simplilearn",
    icon: simplilearn,
    iconBg: "#383E56",
    date: "Present",
    // date: "Jan 2024 - Present",
    points: [
     "Led the development of 3 high-impact products by conducting in-depth research, emphasizing the integration of VAEs, GANs, LLM application building, and AI PDLC, increasing the revenue per product by 10%",
     "Facilitated internal and external collaboration to align product vision for integrating automated conversation agent for the website and LMS, ensuring a seamless user and learner experience resulting in 15% lesser customer support traffic",    
    ],
  },  
  {
    title: "Machine Learning Engineer",
    company_name: "Futr Studios",
    icon: futrstudios,
    iconBg: "#383E56",
    // date: "Sept 2023 - Dec 2023",
    points: [
     "Researched and developed a context-based chat system using conversational buffer memory with Llama2 & Mistral Orca and deployed it for India's first virtual influencer with over 55,000 followers", 
    ],
  },  
  {
    title: "Researcher & Technical Content Writer",
    company_name: "ColdPress.AI",
    icon: coldpress,
    iconBg: "#383E56",
    // date: "August 2023 - Sept 2023",
    points: [
      "Synthesizing a marketing approach to create awareness of the company’s creative dataset services",
      "Researching the targeted community and commencing engagement in the related domains",      
    ],
  },
  {
    title: "Integration-Traineeship",
    company_name: "Ginesys",
    icon: ginesys,
    iconBg: "#E6DEDD",
    // date: "June 2023 - July 2023",
    points: [
      "Enhanced ERP module usability and performance by documenting functionality, designing test cases, UML diagrams, and flowcharts reducing common failures by 18% and streamlined cross-team communication with SRS document for new sub-module integration",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Ganesham Securities Pvt Ltd",
    icon: ganesham,
    iconBg: "#383E56",
    // date: "March 2023 - May 2023",
    points: [
      "Applied ML algorithms (e.g. regression, time series forecasting) to create analytics and predictive models to inform profitable trading decisions",
      "Organized financial data (stock performance, trading volumes, news sentiment) for research and decision-making. ",
    ],
  },
  {
    title: "Chief Product Officer & Co-Founder",
    company_name: "Penning Down Success",
    icon: penningdownsuccess,
    iconBg: "#383E56",
    // date: "April 2020 - Feb 2021",
    points: [
      "Developed partnerships with 12 emerging artists through targeted outreach, expanding the podcast's reach and demonstrating content acquisition abilities",
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
      "Movie recommender system that uses camera to capture facial expression and recommends movie as per user's mood.",
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
