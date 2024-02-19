import React from "react";
import ProjectCard from './ProjectCard';

export default function Projects() {
    const projectData = [
        {
            id:1,
            title: "Ecommerce Web Application",
            description: "User can view the product list and description. Users can buy the products. Users can track the order. Admin can manage the product with stocks. Admin can manage the order module.",
            technology: "Vue.js",
            duration: "Apr 2022 - Oct 2022."
        },
        {
            id:2,
            title: "Inquiry Management Web Application",
            description: "Inquiry Management Web Application will manage the inquiries. Sales person  will manage the inquiry and change the status. Admin can also manage it. Admin can manage all  things in the system. HR can manage sales persons but HR can see the list of inquiries. HR can not  add, update, delete inquiry. It is a role base system.",
            technology: "Node.js, MySQL",
            duration: "Nov 2022 - Apr 2023. "
        },
        {
            id:3,
            title: "Organization Management System.",
            description: "It is a web portal - manage the staff and employees of the company. It is managed as per the role. In the system there are different types of roles like Admin, HR, Manager, Employee etc. In this portal there is task management as well. Manager can assign the task - the employee and the employee can change the status of the task. In this portal there is leave management as well. Employees and HR can manage the leave from this portal. Employees can apply for leave and HR can approve/reject the leave with reason. Apart from that there is other basic information also in the portal like list of yearly leaves and other motivational quotes. So basically this portal was - manage the internal things of the organization and it is very useful for all.",
            technology: "Node.js, React.js, Express.js and MongoDB",
            duration: "Jun 2022 - Sep 2022."
        },
        {
            id:4,
            title: "Matrimonial Website based Web application",
            description: "Admin Website, Backend Website Development",
            technology: "Core PHP, CodeIgneter, HTML5, CSS3, JavaScript, jQuery, AJAX, Bootstrap",
            duration: "Feb 2022 - May 2022"
        }
    ]
    return (
        <section id="projects" className="m-5">
          {/* <h2>Projects</h2> */}
          <h2 className="text-2xl">Which I developed</h2>
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
          {/* List your projects here */}
          {/* <p>These are my Projects</p> */}
          {/* <table>
                <tr>
                    <th>No.</th>
                    <th>title</th>
                    <th>technology</th>
                    <th>duration</th>
                </tr>
                {projectsList.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.technology}</td>
                            <td>{val.duration}</td>
                        </tr>
                    )
                })}
            </table> */}
        </section>
    );
}
