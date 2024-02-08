import React from "react";

export default function Skills() {
    const skillsList = [
        'JavaScript',
        'React.js',
        'Vue.js',
        'HTML',
        'CSS',
        'Core PHP',
        'Symfony',
        'Bootstrap',
        'AJAX',
        'jQuery',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'Git',
        'Responsive Web Design',
        'communication',
        'Problem-solving',
        'Teamwork',
        'Leadership',
        'Adaptability',
        // Add more skills as needed
    ];
    return(
        <div>
            <section id="skills">
            {/* <h2>Skills</h2> */}
            <h2>What I Learnt and Aquired</h2>
            <ul>
                {skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            </section>
        </div>
    )
}
