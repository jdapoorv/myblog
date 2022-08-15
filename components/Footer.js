import Head from "next/head";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerText}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      Jai kashyap © 2022
    </div>
  );
};

export default Footer;
