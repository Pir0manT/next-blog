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
      title = "Ревм. отделение";
      break;
    case "food":
      title = "Врачи";
      break;
    case "travel":
      title = "Администрация";
      break;
    case "culture":
      title = "Старшие медсестры";
      break;
    case "coding":
      title = "Гематология";
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
