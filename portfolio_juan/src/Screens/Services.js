import React from 'react';
import styles from "../Screens/Services.module.css";

export const Services = () => {
  return (
    <div className={styles.services}>
      <p>
        Puedo ayudarte a solucionar pequeños problemas de programación y bases de datos.
      </p>
      <img
        className={styles.webImage}  // Asegúrate de que esta clase esté siendo usada
        src={require("../assets/imagendeservices.jpg")}
      />
    </div>
  );
};