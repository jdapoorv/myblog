import Head from "next/head";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };

    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        alert("Thank you for contacting me. I'll get back to you asap.");
        setphone("");
        setname("");
        setdesc("");
        setemail("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.formDiv}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <form className={styles.formPage} onSubmit={handleSubmit}>
          <div className={styles.mb3}>
            <label htmlFor="name" className={styles.formlabel}>
              Enter your name
            </label>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={handleChange}
              id="name"
              name="name"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="email" className={styles.formlabel}>
              Email address
            </label>
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={handleChange}
              name="email"
              id="email"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className={styles.mb3}>
            <label htmlFor="phone" className={styles.formlabel}>
              Phone
            </label>
            <input
              className={styles.input}
              type="phone"
              value={phone}
              onChange={handleChange}
              name="phone"
              id="phone"
              required
            />
          </div>

          <div className={styles.mb3}>
            <label className={styles.formlabel} htmlFor="desc">
              Leave a comment
            </label>
            <textarea
              className={styles.input}
              value={desc}
              onChange={handleChange}
              name="desc"
              id="desc"
              required
            />
          </div>
          <div className={styles.formtext}>
            Data is gathered only to identify the sender.
          </div>
          <button type="submit" className={styles.btn}>
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
