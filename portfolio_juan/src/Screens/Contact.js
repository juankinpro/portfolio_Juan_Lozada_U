import React from 'react'
import styles from "../Screens/Contact.module.css";

export const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>Ponte en Contacto</h2>
      <form
        className={styles.form}
        method="POST"
        action="https://getform.io/f/bollzppa"
      >
        <label for="Name">Nombre</label>
        <input id="Name" name="Name" className={styles.input}></input>
        <label for="Email">Email</label>
        <input
          id="Email"
          name="Email"
          type="Email"
          className={styles.input}
        ></input>
        <label for="Message">Mensaje</label>
        <textarea id="Message" className={styles.textArea}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
