

import React from "react";
import styles from "../styles/productcard.module.css";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "../types"

type Props = {
  products: Product;
};

export default function Productcard({ products }: Props) {
  return (
    <div className={styles.home}>
      <div className={styles.products}>
        <div className={styles["product-info"]}>
          
          <img
            className={styles["pd-image"]}
            src={products.image}
            alt={products.title}
          />

          <p className={styles.title}>{products.title}</p>

          <p>
            <b>AED {products.price}</b>
          </p>

          <p>{products.category}</p>
          <p>{products.rating.count} ratings</p>

          <Link
            href={`/productlist/${products.id}`}
            className="btn btn-sm btn-warning"
          >
            View Details
          </Link>

          <AddToCartButton product={products} />
        </div>
      </div>
    </div>
  );
}
