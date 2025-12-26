import React from "react";
import styles from "@/styles/footer.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <p className={styles["footer-caption"]}>ABOUT</p>
        <p className={styles["footer-text"]}>Contact us</p>
        <p className={styles["footer-text"]}>About us</p>
        <p className={styles["footer-text"]}>Careers</p>
      </div>

      <div className={styles.footer1}>
        <p className={styles["footer-caption"]}>CONSUMER POLICY</p>
        <p className={styles["footer-text"]}>Terms of use</p>
        <p className={styles["footer-text"]}>Security</p>
        <p className={styles["footer-text"]}>Privacy</p>
      </div>

      <div className={styles.footer1}>
        <p className={styles["footer-caption"]}>VISIT US:</p>
        <p className={styles["footer-text"]}>xyz building</p>
        <p className={styles["footer-text"]}>ABC street</p>
        <p className={styles["footer-text"]}>Dubai</p>
      </div>

      <div className={styles.footer1}>
        <p className={styles["footer-caption"]}>HELP</p>
        <p className={styles["footer-text"]}>Payments</p>
        <p className={styles["footer-text"]}>Shipping</p>
        <p className={styles["footer-text"]}>Cancellation & returns</p>
        <p className={styles["footer-text"]}>FAQ</p>
      </div>
    </div>
  );
}
