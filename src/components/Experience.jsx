import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import React from "react";

import { experiences } from "../constants";
import { styles } from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
   
    <div
     className="experience-card"
    >
      <div
        className="flex justify-center items-center"
        style={{
          marginBottom: "2rem",
        }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
          style={{
            width: "60px",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <h3 className="text-white text-[20px]">{experience.title}</h3>
        <p className="text-secondary text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="text-secondary text-[16px]">{experience.date}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} text-center`}>
//           What I have done so far
//         </p>
//         <h2 className={`${styles.sectionHeadText} text-center`}>
//           Work Experience.
//         </h2>
//       </motion.div>

//       <div className='mt-20 flex flex-col flex-wrap '>
//         <VerticalTimeline>

//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");

const Experience = () => {
  return (
    <motion.section
      className="experience-container"
      variants={window.innerWidth > 600 ? staggerContainer() : ""}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={window.innerWidth > 600 ? textVariant() : ""}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="experience-card-container gap-5 mt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
