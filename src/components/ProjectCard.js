// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, technology }) => {
  return (
    <div className="border p-5 mb-5 shadow-lg">
      <h3 className='text-blue-500'>{title}</h3>
      <p className='m-3'>{description}</p>
      <p className='m-3'><strong>Technologies:</strong> {technology}</p>
    </div>
  );
};

export default ProjectCard;
