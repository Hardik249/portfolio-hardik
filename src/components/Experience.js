// components/Experience.js
import React from 'react';

export default function Experience () {
  const experiences = [
    {
      company: 'Karavya Solutions LLp',
      position: 'Jr. Software Engineer',
      duration: 'June 2022 - Present',
      description: 'Worked on Many projects, implemented new features, and collaborated with cross-functional teams.',
    },
    {
      company: 'Mehta Infosoft Pvt. Ltd.',
      position: 'Software Engineer',
      duration: 'January 2022 - June 2022',
      description: 'Worked on Matrimony project, implemented new features, and collaborated with cross-functional teams.',
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="m-5">
      {/* <h2>Experience</h2> */}
      <h2 className="text-2xl">Where I Worked</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience-item mb-5">
          <h3 className='text-black'>{experience.company}</h3>
          <p className='text-gray-600 text-sm m-1'>{experience.position}</p>
          <p className='text-gray-600 text-sm m-1'>{experience.duration}</p>
          <p className='text-gray-600 text-sm m-1'>{experience.description}</p>
        </div>
      ))}
    </section>
  );
};

