import { motion } from "framer-motion";

import { styles } from "../styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faEnvelope
}
from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGit,
  faLinkedin,
  faMailchimp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="hero-stroke flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dhruv</span>
          </h1>
          {/* <p
            className="hero-description about-me"
          >
            I'm a skilled Machine Learning & AI engineer with proficiency in programming
            languages like
            <i class="devicon-python-plain"></i>
            Python,
            <i class="devicon-cplusplus-plain"></i>
            C++ and
            <i class="devicon-mysql-plain"></i>
            SQL. With Data Science as my strength, my interests lie in Python &
            Machine Learning. I'm a quick learner, who can take ownership of his work
            and also collaborate and work across teams. I can create efficient, scalable, and
            user-friendly solutions that solve real-world problems.
          </p> */}
          <p
            // className="hero-description about-me"
          >
            I am an enthusiastic AI and ML professional deeply committed to using technology for positive social change. 
          <br/>Driven by an entrepreneurial mindset and the potential of AI to aid lives with technological development, <br/>
          I am eager to contribute to projects that make a true impact.
          <br/> I feel at ease in fast-paced environments, and ownership, having worked at multiple startups.
        <br/>Actively seeking full-time roles, feel free to contact me to discuss any opportunities in the AI/ML domain.

      
          </p>
          <div className="grid grid-cols-4 gap-2 mt-5 w-40">
          <a href="https://www.linkedin.com/in/dhruvladia/"
          className="youtube social" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.github.com/dhruvladia/"
            className="facebook social" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="/DhruvKantLadia_Resume.pdf"  className="font-bold" download = "DhruvKantLadia_CV.pdf" style={{display:"flex", alignItems:"center", fontSize:"1.2rem"}}>
            Resume
          </a>
         
        </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
