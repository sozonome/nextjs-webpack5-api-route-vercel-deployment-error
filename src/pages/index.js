import Head from "next/head";

import { getSortedPostsData } from "../lib/posts";

import styles from "../styles/Home.module.css";

const Home = ({ allPostsData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Posts Data API Route</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Example, go to <a href="/api/posts">API route</a>
        {allPostsData.map((post) => (
          <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
