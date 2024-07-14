import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  let title = "";
  switch (item.catSlug) {
    case "style":
      title = "Важное";
      break;
    case "fashion":
      title = "Полезное";
      break;
    case "food":
      title = "Интересное";
      break;
    case "travel":
      title = "Познавательное";
      break;
    case "culture":
      title = "Свежее";
      break;
    case "coding":
      title = "Срочное";
      break;
    default:
      title = "Все новости";
      break;
  }
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{title}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Продолжить чтение
        </Link>
      </div>
    </div>
  );
};

export default Card;
