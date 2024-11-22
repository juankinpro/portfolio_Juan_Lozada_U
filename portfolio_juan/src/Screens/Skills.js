import React from 'react'
import styles from "../Screens/Skills.module.css";
import { AiFillFund } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FaPerson } from "react-icons/fa6";

export const Skills = () => {
  return (
    <div name="Interes" className={styles.Skills}>
      <h2 className={styles.SkillsTitle}>
        Mis Habilidades y Pensamientos
      </h2>
      <p>Tengo Habilidades de Programacion en C++, C#, SQL,
        Phyton y tengo conocimientos basicos en JavaScrip. <DiGithubBadge />
      </p>
      <p>
        Tengo pensado comenzar con pequeños trabajos de Inventario en Tiendas. <AiFillFund />
      </p>
      <p>
        Tengo Habilidades sociales soy una persona correcta para negocios, confiable y
        responsabilidad.<FaPerson />
      </p>
    </div>
  )
}
