import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import React from "react";

import { experiences } from "../constants";
import { styles } from "../styles";
import { staggerContainer, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    // <VerticalTimelineElement
    //   contentStyle={{
    //     background: "#1d1836",
    //     color: "#fff",
    //   }}
    //   contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    //   date={experience.date}
    //   iconStyle={{ background: experience.iconBg }}
    //   icon={
    //     <div className="flex justify-center items-center w-full h-full">
    //       <img
    //         src={experience.icon}
    //         alt={experience.company_name}
    //         className="w-[60%] h-[60%] object-contain"
    //       />
    //     </div>
    //   }
    // >
    //   <div>
    //     <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    //     <p
    //       className="text-secondary text-[16px] font-semibold"
    //       style={{ margin: 0 }}
    //     >
    //       {experience.company_name}
    //     </p>
    //   </div>

    //   <ul className="mt-5 list-disc ml-5 space-y-2">
    //     {experience.points.map((point, index) => (
    //       <li
    //         key={`experience-point-${index}`}
    //         className="text-white-100 text-[14px] pl-1 tracking-wider"
    //       >
    //         {point}
    //       </li>
    //     ))}
    //   </ul>
    // </VerticalTimelineElement>
    <div
      style={{
        background: "#1d1836",
        color: "#fff",
        padding: "1.5rem",
        width: "20vw",
      }}
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
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "3rem 0",
      }}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="flex gap-5 mt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
