import React from "react";

export default function Companies() {
    const componiesList = [
        'Mehta Infosoft Pvt. Ltd.',
        'Karavya Solutions LLp'
    ];
    return(
        <div>
            <section id="companies" className="m-5">
            {/* <h2>Companies</h2> */}
            <h2 className="text-2xl">Where I worked in</h2>
            <ul className="mt-2">
                {componiesList.map((skill, index) => (
                <li key={index}>{skill}</li>
                ))}
            </ul>
            </section>
        </div>
    )
}