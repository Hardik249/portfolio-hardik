import React from "react";

export default function Companies() {
    const componiesList = [
        'Mehta Infosoft Pvt. Ltd.',
        'Karavya Solutions LLp'
    ];
    return(
        <div>
            <section id="companies">
            {/* <h2>Companies</h2> */}
            <h2>Where I worked in</h2>
            <ul>
                {componiesList.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            </section>
        </div>
    )
}