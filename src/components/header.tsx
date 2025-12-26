import React from "react";
import styles from "@/styles/header.module.css"
import Link from "next/link";
import CartLength from "../components/cartLength";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.jpg" alt="Logo" />

      <input
        className={styles.search}
        type="text"
        placeholder="search"
      />

      <img
        className={styles.icon}
        src="/images/icon.png"
        alt="Icon"
      />

      <img
        className={styles.login}
        src="/images/profile.jpg"
        alt="Profile"
      />

      <Link
        href="/login"
        className={styles.signup}
      >
        Sign up
      </Link>

      <CartLength />
    </header>
  );
}
