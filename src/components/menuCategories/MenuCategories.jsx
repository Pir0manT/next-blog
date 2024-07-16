import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
            Все новости
        </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Важное
      </Link>
      <Link href="/blog?cat=fashion" className={`${styles.categoryItem} ${styles.fashion}`}>
          Ревм. отделение
      </Link>
      <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
          Врачи
      </Link>
      <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
          Администрация
      </Link>
      <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
          Старшие медсестры
      </Link>
      <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
          Гематология
      </Link>
    </div>
  );
};

export default MenuCategories;
