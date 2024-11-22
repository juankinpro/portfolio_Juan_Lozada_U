import React from 'react';
import styles from "../Screens/Aboutme.module.css";
import Step from "../Components/Step";

const Aboutme = () => {
  const steps = [
    {
      text: " Mi nombre es Juan Lozada.",
      id: 1,
    },
    {
      text: " Me gusta mas el Back end.",
      id: 2,
    },
    {
      text: " Soy pesimo para el Front.",
      id: 3,
    },
  ];

  return (
    <div name="Aboutme" className={styles.Aboutme}>
      <h2 className={styles.title}>Quien soy</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} />
      ))}
    </div>
  );
};

export default Aboutme