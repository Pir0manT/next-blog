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
        Полезное
      </Link>
      <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>
        Интересное
      </Link>
      <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>
        Познавательное
      </Link>
      <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>
        Свежее
      </Link>
      <Link href="/blog?cat=coding" className={`${styles.categoryItem} ${styles.coding}`}>
        Срочное
      </Link>
    </div>
  );
};

export default MenuCategories;
