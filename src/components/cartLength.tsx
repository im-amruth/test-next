"use client";

import { useAppSelector } from "../store/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/header.module.css"

export default function CartLength() {
  const totalQuantity = useAppSelector(
    (state) => state.cart.totalQuantity
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <Link
      href="/mycart"
      className={styles.signup}
    >
      <img
       
        className={styles.cart}
        src="../images/cart.png"
      />
      Cart ({totalQuantity})
    </Link>
  );
}
