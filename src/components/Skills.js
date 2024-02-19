import React from "react";

export default function Skills() {
    const skillsList = [
        'JavaScript',
        'React.js',
        'Vue.js',
        'HTML5',
        'CSS3',
        'Core PHP',
        'Symfony',
        'Bootstrap',
        'AJAX',
        'jQuery',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MERN-Stack',
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
            <section id="skills" className="m-5 p-10">
                {/* <h2>Skills</h2> */}
                <h2 className="text-black text-2xl">What I Learnt and Aquired</h2>
                {/* <ul>
                    {skillsList.map((skill, index) => (
                    <li key={index}>{skill}</li>
                    ))}
                </ul> */}
                <div className="grid xl:grid-cols-4 gap-4 mt-4 ">
                    {/* <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index} className="border">{skill}</li>
                    ))}
                    </ul> */}
                    {skillsList.map((skill, index) => (
                    <ul key={index} className="border rounded-full border-sky-100 bg-sky-50 px-2 py-0.5 dark:text-sky-300">
                        <li>{skill}</li>
                    </ul>
                    ))}
                </div>
            </section>
        </div>
    )
}
