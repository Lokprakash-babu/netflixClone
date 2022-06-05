import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import SectionCard from "../components/sectionCard/sectionCard";
import { getVideos } from "../lib/videos";

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
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

      <Navbar />
      <Banner
        title="Clifford the red dog"
        subTitle="Red dog"
        imgUrl="/static/clifford.jpg"
      />

      <SectionCard title="Disney" videos={disneyVideos} size="large" />
      <SectionCard title="Travel" videos={travelVideos} size="small" />
      <SectionCard
        title="Productivity"
        videos={productivityVideos}
        size="medium"
      />
      <SectionCard title="comedies" videos={popularVideos} size="small" />
    </div>
  );
}

export const getServerSideProps = async () => {
  const disneyVideos = await getVideos("disney trailers");
  const travelVideos = await getVideos("travel videos");
  const productivityVideos = await getVideos("productivity videos");
  const popularVideos = await getVideos("standup comedies");
  return {
    props: {
      disneyVideos,
      travelVideos,
      productivityVideos,
      popularVideos,
    },
  };
};
