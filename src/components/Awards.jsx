import React from 'react';
import { awards } from '../data/other';

function Awards() {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Awards & Certifications</h2>
        <ul className="fa-ul mb-0 ms-0 ps-0">
            {awards.map((award, index) => (
                <li key={index} className="mb-2">``
                   {award}
                </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;
