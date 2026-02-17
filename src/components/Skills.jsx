import React from 'react';
import { FaJsSquare, FaAngular, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaNpm, FaBootstrap, FaCheck } from 'react-icons/fa';
import { skills } from '../data/skills';

function Skills() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item"><FaJsSquare /></li>
          <li className="list-inline-item"><FaAngular /></li>
          <li className="list-inline-item"><FaReact /></li>
          <li className="list-inline-item"><FaNodeJs /></li>
          <li className="list-inline-item"><FaHtml5 /></li>
          <li className="list-inline-item"><FaCss3Alt /></li>
          <li className="list-inline-item"><FaBootstrap /></li>
          <li className="list-inline-item"><FaSass /></li>
          <li className="list-inline-item"><FaNpm /></li>
        </ul>

        {skills.core.map((skill, index) => (
            <div key={index} className="mb-3">
                <div className="subheading mb-1">{skill.category}</div>
                <p>{skill.details}</p>
            </div>
        ))}
        
        {skills.specialized && (
            <div className="mb-3">
                <div className="subheading mb-1">{skills.specialized.category}</div>
                 <ul className="fa-ul mb-0 ms-0 ps-0">
                    {skills.specialized.items.map((item, index) => (
                        <li key={index}>
                            <span className="fa-li"><FaCheck /></span>
                            {/* Replaced fa-li with explicit span/icon if needed or keep fa-li if using FontAwesome CSS. 
                                Since we use react-icons, fa-li class might not work as expected without FA css.
                                Let's stick to simple list for now or use react-icons properly.
                             */}
                             <strong className="me-2">{item.name}:</strong> {item.details}
                        </li>
                    ))}
                 </ul>
            </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
