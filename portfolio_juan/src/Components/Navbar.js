import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import { CgMenuMotion } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Services" },
        { id: 3, link: "Aboutme" },
        { id: 4, link: "Benefits" },
    ];

    return (
        <div className={navbarOpen ? styles.NavbarOpen : styles.Navbar}>
            <p className={styles.logo}>Proyecto | Juan Lozada</p>
            <div className={styles.menuIcon} onClick={() => setNavbarOpen(!navbarOpen)}>
                {navbarOpen ? <IoCloseOutline size={50} /> : <CgMenuMotion size={50} />}
            </div>
            {navbarOpen && (
                <ul className={styles.navLinks}>
                    {links.map((x) => (
                        <li key={x.id}>
                            <Link
                                onClick={() => setNavbarOpen(false)}
                                to={x.link} 
                                smooth={true} 
                                duration={500} 
                                className={styles.navItem}
                            >
                                {x.link === "Aboutme" ? "Sobre Mi" : x.link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


