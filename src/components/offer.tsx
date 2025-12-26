import React from "react";
import styles from "@/styles/offer.module.css"

export default function Offer({ products }: any) {
  return (
    <div className={styles.home}>
      <div className={styles.productstyle}>
        <div className={styles.offerproductInfo}>
          <img
            className={styles.pdImage}
            src={products.image}
            alt={products.title}
          />

          <p className={styles.title}>{products.title}</p>

          <p>
            <b>AED {products.price}</b>
          </p>

          <p>{products.category}</p>
          <p>{products.rating.count}</p>

          <button className={styles.shopButton}>
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
}
