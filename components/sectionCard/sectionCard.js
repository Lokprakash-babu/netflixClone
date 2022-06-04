import Link from "next/link";
import Card from "../card/card";
import styles from "./sectionCard.module.css";

const SectionCard = ({ title, videos, size }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          return <Card imgUrl={video.imgUrl} key={idx} size={size} />;
        })}
      </div>
    </section>
  );
};

export default SectionCard;
