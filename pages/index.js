import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner/banner";
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
      <h1>Netflix</h1>

      <Banner
        title="Clifford the red dog"
        subTitle="Red dog"
        imgUrl="/static/clifford.jpg"
      />
      {/* <NavBar/> */}
      {/* <Card/> */}
    </div>
  );
}
