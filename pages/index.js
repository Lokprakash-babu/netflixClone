import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
import Navbar from "../components/nav/navbar";
import Card from "../components/card/card";
export default function Home() {
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
      <Card imgUrl="/static/clifford.jpg" size="large" />
      <Card imgUrl="/static/clifford.jpg" size="medium" />
      <Card imgUrl="/static/clifford.jpg" size="small" />

      {/* <NavBar/> */}
      {/* <Card/> */}
    </div>
  );
}
