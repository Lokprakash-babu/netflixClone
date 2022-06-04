import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import SectionCard from "../components/sectionCard/sectionCard";
import { getVideos } from "../lib/videos";

export default function Home({ disneyVideos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta
          name="description"
          content="Netflix clone developed by Lokprakash Babu"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar userName="Lokprakash" />
      <Banner
        title="Clifford the red dog"
        subTitle="Red dog"
        imgUrl="/static/clifford.jpg"
      />

      <SectionCard title="Disney" videos={disneyVideos} size="large" />
    </div>
  );
}

export const getServerSideProps = async () => {
  const disneyVideos = getVideos();
  return {
    props: {
      disneyVideos,
    },
  };
};
