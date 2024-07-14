"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Войти
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Написать
          </Link>
          <span className={styles.link} onClick={signOut}>
            Выйти
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">На главную</Link>
          <Link href="/">О нас</Link>
          <Link href="/">Контакты</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Войти</Link>
          ) : (
            <>
              <Link href="/write">Написать</Link>
              <span className={styles.link}>Выйти</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
