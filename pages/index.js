import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jdapoorv</title>
        <meta name="keywords" content="nextjs, jd&apos;s blog, jai" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&family=Shalimar&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I am <span className={styles.titleName}>Jai</span>.
        </h1>
        <p className={styles.intro}>
          A 21 year old who is trying to figure out what to put up as his bio.
          How to sell himself, so to speak.
        </p>
        <p className={styles.description}>
          Depending on the day, there could be a million adjectives that I can
          use as my self-description. I breathe a sigh of relief when I realise
          I haven&apos;t built this site as a way to sell myself. Rather, I built it
          to keep an account of my self-exploration; to tap into my
          introspective self and write down some thoughts that nobody cares
          about. It&apos;s a journey and the final aim is to write a personal bio
          that feels true to myself.
        </p>
      </main>
    </div>
  );
}
