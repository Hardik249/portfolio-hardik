import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <header className="bg-black text-white pb-4">
            <h1 className="text-2xl">Hardik Kotak</h1>
            <p>Software Developer</p>
            <nav>
                <ul className="hidden md:flex justify-around pt-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        {isMobileMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />
}
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <nav>
                        <ul className="md:flex justify-around pt-4">
                            <li><a href="/">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}
