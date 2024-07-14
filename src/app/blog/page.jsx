import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  let title = "";
  switch (cat) {
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
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
