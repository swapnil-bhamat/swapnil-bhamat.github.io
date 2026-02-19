import React from 'react';
import { interests } from '../data/other';

function Interests() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        {interests.map((interest, index) => (
            <p key={index} className="mb-0">{interest}</p>
        ))}
      </div>
    </section>
  );
}

export default Interests;
