// components/Experience.js
import React from 'react';

export default function Experience () {
  const experiences = [
    {
      company: 'Mehta Infosoft Pvt. Ltd.',
      position: 'Software Engineer',
      duration: 'January 2022 - June 2022',
      description: 'Worked on Matrimony project, implemented new features, and collaborated with cross-functional teams.',
    },
    {
      company: 'Karavya Solutions LLp',
      position: 'Software Engineer',
      duration: 'June 2022 - Present',
      description: 'Worked on Many projects, implemented new features, and collaborated with cross-functional teams.',
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience">
      {/* <h2>Experience</h2> */}
      <h2>What I Earned</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item">
          <h3>{experience.company}</h3>
          <p>{experience.position}</p>
          <p>{experience.duration}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

