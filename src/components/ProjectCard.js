// components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, technology }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Technologies:</strong> {technology}</p>
    </div>
  );
};

export default ProjectCard;
