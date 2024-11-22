import React from "react";
import { Link } from "react-scroll";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div name="Home" className={styles.home}>
      <div className={styles.titleContainer}>
        <p>Home<br />
         Pantalla principal
      </p>
        <p>
        Aqui pondria lo que sea que quiera, pero como no se que poner.<br/>
        <b>Ella es fanatica de lo sensual</b>
      </p>
      </div>
      <div className={styles.ctaContainer}>
        <Link
          to="Contact"
          smooth
          duration={500}
          className={styles.callToAction}
        >
          Ella tiene una FOTOMIA
        </Link>
      </div>
    </div>
  );
}
