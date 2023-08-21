import React from "react";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import './Tech.css';
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div>
//      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Tech Stack</p>
//   <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
//       Skills.
//     </h2>
   
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
       
 
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon} />          
//         </div>
//       ))}
//     </div>
//     </div>

//   );
// };

// export default SectionWrapper(Tech, "work");



// import React from 'react';

const Tech = () => {
  
  const skills = [
    { name: 'Machine Learning', progress: 90 },    
    { name: 'Python', progress: 80 },
    { name: 'SQL', progress: 80 },    
    { name: 'NLP', progress: 70 },
    {name: 'TensorFlow', progress: 75 },
    { name: 'PyTorch', progress: 80 },
   

    { name: 'Data Structures & Algorithms', progress: 75 },
    
    { name: 'Object Oriented Programming', progress: 75 },

    { name: 'C++', progress: 85 },    
    { name: 'C#', progress: 85 },    
    { name: 'C', progress: 85 },
    { name: 'Debugging Skills', progress: 80 },
   
    { name: 'Statistical Data Analysis', progress: 75 },
    { name: 'Hugging Face', progress: 80 },   
    { name: 'Weights & Biases', progress: 80 },
    { name: 'MATLAB', progress: 60 },
    { name: 'GitHub', progress: 70 },    
    { name: 'Jupyter Notebook', progress: 80 },
   
    { name: 'Project Management', progress: 70 },
    { name: 'Microsoft Office', progress: 70 },    
    { name: 'Database Management', progress: 80 },
    { name: 'Google Colab', progress: 80 },
    { name: 'Visual Studio Code', progress: 70 },
    { name: 'Flutter', progress: 60  },
  ];
  // Split the skills into two separate arrays
  const midpoint = Math.floor(skills.length / 4);
  const skillsColumn1 = skills.slice(0, midpoint);
  const skillsColumn2 = skills.slice(midpoint,midpoint*2);
  const skillsColumn3 = skills.slice(midpoint*2, midpoint*3);
  const skillsColumn4 = skills.slice(midpoint*3);
  
  return (
    <div>
    <p className="sm:text-[18px] text-[14px] text-secondary uppercase ">Tech Stack</p>
    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Skills.</h2>
    <section className="skills" style={{ backgroundColor:'black', padding:0, margin:0}}>
   
    <div className="column">
      <h2>Data Science</h2>
        {skillsColumn1.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name" style={{ fontWeight: 'normal' }}>
              {skill.name}
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="column">
      <h2>Software Engg</h2>
        {skillsColumn2.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name" style={{ fontWeight: 'normal' }}>
              {skill.name}
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="column">
      <h2>Analyst & Tools</h2>
        {skillsColumn3.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name" style={{ fontWeight: 'normal' }}>
              {skill.name}
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="column">
      <h2>Analyst & Tools</h2>
        {skillsColumn4.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name" style={{ fontWeight: 'normal' }}>
              {skill.name}
            </div>
            <div className="skill-progress">
              <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");

