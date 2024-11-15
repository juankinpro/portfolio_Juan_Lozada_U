import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import { CgMenuMotion } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0); // Estado para el desplazamiento
    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    const detectScroll = () => {
        setScrollPosition(window.scrollY); 
    };

    useEffect(() => {
        window.addEventListener("resize", detectDimension);
        window.addEventListener("scroll", detectScroll); 
        return () => {
            window.removeEventListener("resize", detectDimension);
            window.removeEventListener("scroll", detectScroll); 
        };
    }, []);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "Servicios" },
        { id: 3, link: "Aboutme" },
        { id: 4, link: "Intereses" },
    ];

    return (
        <div
            className={
                navbarOpen
                    ? styles.NavbarOpen
                    : scrollPosition > 0
                    ? styles.navOnScroll
                    : styles.Navbar
            }
        >
            {!navbarOpen && <p className={styles.logo}>Proyecto | Juan Lozada</p>}
            {!navbarOpen && windowDimension.width < 800 ? (
                <CgMenuMotion
                    color="#f1f1f1"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    size={25}
                />
            ) : (
                windowDimension.width < 800 && (
                    <IoCloseOutline
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        color="#f1f1f1"
                        size={25}
                    />
                )
            )}
            {navbarOpen && (
                <ul className={styles.navLinks}>
                    {links.map(({ id, link }) => (
                        <div key={id}>
                            <Link
                                onClick={() => setNavbarOpen(false)}
                                to={link}
                                smooth
                                duration={500}
                                className={styles.navItem}
                            >
                                {link === "Aboutme" ? "Sobre Mi" : link}
                            </Link>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                </ul>
            )}
            {windowDimension.width > 800 && (
                <ul className={styles.navLinks}>
                    {links.map(({ id, link }) => (
                        <div key={id}>
                            <Link
                                onClick={() => setNavbarOpen(false)}
                                to={link}
                                smooth
                                duration={500}
                                className={styles.navItem}
                            >
                                {link === "Aboutme" ? "Sobre Mi" : link}
                            </Link>
                            <div className={styles.border}></div>
                        </div>
                    ))}
                    <Link
                        onClick={() => setNavbarOpen(false)}
                        to="Contact"
                        smooth
                        duration={500}
                        className={styles.contactLink}
                    >
                        Contacto
                    </Link>
                </ul>
            )}
        </div>
    );
};
