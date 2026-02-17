import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { profile } from '../data/profile';

function About() {
  const { name, role, location, contact, summary, impact } = profile;
  const lastName = name.split(' ').pop();
  const firstName = name.split(' ').slice(0, -1).join(' ');

  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0">
          {firstName} <span className="text-primary ms-3">{lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {role}<br /> 
          {contact.phone} 
          <a href={`mailto:${contact.email}`} className="ms-2">{contact.email}</a>
          <span className="ms-3">
             <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="me-3 text-secondary">
                <FaLinkedinIn size={20} />
             </a>
             <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-secondary">
                <FaGithub size={20} />
             </a>
          </span>
          <br />
          {location}
        </div>
        <p className="lead mb-5">
          {summary}
        </p>
        
        {impact && impact.length > 0 && (
            <div className="mb-5">
                <h3 className="h5 font-weight-bold">Architecture Impact Snapshot</h3>
                <ul>
                    {impact.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )}
      </div>
    </section>
  );
}

export default About;
