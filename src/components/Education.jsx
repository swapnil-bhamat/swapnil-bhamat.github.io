import React from 'react';
import { education } from '../data/education';

function Education() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        {education.map((edu, index) => (
            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">{edu.institution}</h3>
                <div className="subheading mb-3">{edu.degree}</div>
                <div>{edu.grade}</div>
            </div>
            <div className="resume-date text-md-end">
                <span className="text-primary">{edu.period}</span>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
