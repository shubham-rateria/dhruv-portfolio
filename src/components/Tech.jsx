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
    { name: 'Machine Learning'},    
    { name: 'Python'},
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
  
  // return (
  //   <div>
  //   <p className="sm:text-[18px] text-[14px] text-secondary uppercase ">Tech Stack</p>
  //   <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
  //       Skills</h2>
  //   <section className="skills" style={{ backgroundColor:'black', padding:0, margin:0}}>
   
  //   <div className="column">
  //     <h2>AI / ML</h2>
  //       {skillsColumn1.map((skill, index) => (
  //         <div className="skill" key={index}>
  //           <div className="skill-name" style={{ fontWeight: 'normal' }}>
  //             {skill.name}
  //           </div>
  //           {/* <div className="skill-progress">
  //             <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
  //           </div> */}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="column">
  //     <h2>Languages</h2>
  //       {skillsColumn2.map((skill, index) => (
  //         <div className="skill" key={index}>
  //           <div className="skill-name" style={{ fontWeight: 'normal' }}>
  //             {skill.name}
  //           </div>
  //           {/* <div className="skill-progress">
  //             <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
  //           </div> */}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="column">
  //     <h2>Analyst & Tools</h2>
  //       {skillsColumn3.map((skill, index) => (
  //         <div className="skill" key={index}>
  //           <div className="skill-name" style={{ fontWeight: 'normal' }}>
  //             {skill.name}
  //           </div>
  //           {/* <div className="skill-progress">
  //             <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
  //           </div> */}
  //         </div>
  //       ))}
  //     </div>
  //     <div className="column">
  //     <h2>Analyst & Tools</h2>
  //       {skillsColumn4.map((skill, index) => (
  //         <div className="skill" key={index}>
  //           <div className="skill-name" style={{ fontWeight: 'normal' }}>
  //             {skill.name}
  //           </div>
  //           {/* <div className="skill-progress">
  //             <div className="progress-bar" style={{ width: `${skill.progress}%` }}></div>
  //           </div> */}
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  //   </div>
  // );

  return (
  <section className="w-full py-20 bg-[#1a1a1a]">
  <div className="container mx-auto px-4 md:px-6 lg:px-8">
    <div className="flex flex-col items-center text-center">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">Skills</h2>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <div className="bg-[#262626] rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">AI / ML</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Machine Learning</li>
          <li>LLMs</li>
          <li>LangChain</li>
          <li>NLP</li>
          <li>TensorFlow</li>
          <li>PyTorch</li>
          <li>Conversational AI</li>
          <li>Keras</li>
          <li>HuggingFace</li>
        </ul>
      </div>
      <div className="bg-[#262626] rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Languages</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Data Structures & Algorithms</li>
          <li>SQL</li>
          <li>C++</li>
          <li>C#</li>
          <li>C</li>
          <li>Python</li>
          
        </ul>
      </div>
      <div className="bg-[#262626] rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Product</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Confluence</li>
          <li>Microsoft Office</li>
          <li>Google Analytics</li>
         <li>JIRA</li>    
         <li>Clevertap</li>
         <li>Tableau</li>
         <li>Aha!</li>
         <li>G-Suite</li>
         <li>Statistical Data Analysis</li>
        </ul>
      </div>
      <div className="bg-[#262626] rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
        <ul className="text-gray-400 space-y-2">
          <li>Hugging Face</li>
          <li>Weights & Biases</li>
          <li>MATLAB</li>
          <li>Git</li>
          <li>Jupyter Notebook</li>
          <li>Google Colab</li>
          <li>Google Cloud Platform</li>
         <li>AWS</li>
        </ul>
      </div>     
    </div>
  </div>
</section>
  );
};

export default SectionWrapper(Tech, "skills");

