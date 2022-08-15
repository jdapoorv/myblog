import Head from "next/head";
import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <main className={styles.mainAbout}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&family=Shalimar&display=swap"
            rel="stylesheet"
          />
        </Head>
        <h1 className={styles.title}>Jai Kashyap</h1>
        <h2>Introduction</h2>
        <p>
          I am currently a final year computer science engineering student at
          IIIT Kota (MNIT Jaipur). Besides coding, I often find myself indulged
          in reading, writing, playing chess, playing cricket, or watching
          Youtube. I like to learn stuff and get better at things.
        </p>
        <h2>Technical knowledge</h2>
        
        <ul className={styles.lang}> 
          <li>Programming languages: C, C++, Javascript, Python</li>
          <li>Libraries & Frameworks: React.js, Next.js, Bootstrap, Node.js, ExpressJS</li>
          
        </ul>
      </main>
    </div>
  );
};

export default About;
