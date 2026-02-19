import React from 'react';
import { experience } from '../data/experience';

function Experience() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        {experience.map((job, index) => (
          <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              {job.roles.map((role, rIndex) => (
                 <div key={rIndex} className={rIndex > 0 ? "mt-4" : ""}>
                    <h3 className="mb-0">{role.title}</h3>
                    <div className="subheading mb-3">{job.company}</div>
                    
                    {role.description && <p>{role.description}</p>}
                    
                    {role.highlights && (
                        <ul className="fa-ul mb-0 ms-0 ps-0"> 
                            {role.highlights.map((highlight, hIndex) => {
                            const isHeader = highlight.startsWith('**');
                            const text = highlight.replace(/\*\*/g, '');
                            
                            if (isHeader) {
                                return (
                                    <li key={hIndex} className="list-unstyled mt-3 mb-2">
                                        <h5 className="fw-bold text-dark">{text}</h5>
                                    </li>
                                );
                            }
                            
                            return (
                                <li key={hIndex} className="mb-2">
                                    <span className="fa-li"><i className="fas fa-check"></i></span>
                                    {highlight}
                                </li>
                            );
                        })}
                        </ul>
                    )}
                 </div>
              ))}
            </div>
            <div className="resume-date text-md-end">
              <span className="text-primary">{job.roles[0].period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
