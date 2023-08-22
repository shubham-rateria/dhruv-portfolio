import { motion } from "framer-motion";

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        style={{
          marginTop: "20vh",
        }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Dhruv</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a Computer Science Engineer !
          </p> */}
          <p
            style={{
              maxWidth: "40vw",
              marginTop: "1rem",
              fontSize: "1.2rem",
              fontWeight: "200",
            }}
            className="about-me"
          >
            I'm a skilled software engineer with proficiency in programming
            languages like
            <i class="devicon-python-plain"></i>
            Python,
            <i class="devicon-cplusplus-plain"></i>
            C++ and
            <i class="devicon-mysql-plain"></i>
            SQL. With Data Science as my strength, my interests lie in Python &
            Machine Learning. I'm learning the skills required to develop AI
            systems in the green energy & healthcare sector. I'm a quick learner
            and collaborate with people. I can create efficient, scalable, and
            user-friendly solutions that solve real-world problems.
          </p>
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
