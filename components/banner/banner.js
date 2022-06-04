import Image from "next/image";
import styles from "./banner.module.css";

const Banner = ({ title, subTitle, imgUrl }) => {
  const clickHandler = () => {
    console.log("hello");
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}>{title} </h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button onClick={clickHandler} className={styles.btnWithIcon}>
              <Image
                src="/static/play.svg"
                alt="play icon"
                width={32}
                height={32}
              />
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.bannerImg}
      />
    </div>
  );
};

export default Banner;
