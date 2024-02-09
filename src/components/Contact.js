import React from "react";

export default function Contact() {
    const handleCopyEmail = () => {
        navigator.clipboard.writeText("hardikkotak249@gmail.com"); 
        alert("Copied to Clipboard!", "success");
    }
    const handleCopyNumber = () => {
        navigator.clipboard.writeText(+916355238151); 
        // window.getSelection(+916355238151)
        alert("Copied to Clipboard!", "success");
    }
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p>Email : 
                <a href="mailto:hardikkotak249@gmail.com" className="ml-0">
                    hardikkotak249@gmail.com
                </a>
                <button onClick={handleCopyEmail} className="button">Copy Email</button>
            </p>
            <p>Contact : +91 6355238151
                <button onClick={handleCopyNumber} className="button">Copy Contact</button>
            </p>
            <p>
                <a href="https://api.whatsapp.com/send?phone=6355238151" rel="noreferrer" target='_blank'>
                    Contact Me on WhatsApp
                </a>
            </p>
            <p>
                Need help with a project or want to discuss collaboration?
                <button onClick={() => alert("Feel free to reach out!")} className="button">
                Get in Touch
                </button>
            </p>
          {/* <p>LinkedIn: linkedin.com/in/yourprofile</p> */}
          {/* Add more contact information */}
        </section>
    );
}
