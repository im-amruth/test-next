import React from "react";
import styles from "@/styles/about.module.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us | Eclat Cart",
  description: "Know about our store",
};

export default function About() {
  return (
    <div className={`${styles.aboutPage} container py-5`}>
      <p
        className="text-center mb-4"
        style={{ fontSize: "12mm", fontWeight: "bold" }}
      >
        About Us
      </p>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/images/aboutus.png"
            alt="About Us"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h3>Who We Are</h3>
          <p>
            We are a dedicated team committed to providing the best products and
            services to our customers. Our mission is to deliver quality,
            innovation, and value in everything we do.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be a trusted brand known for excellence and customer satisfaction.
            We continue to grow by listening to our customers and improving every
            day.
          </p>

          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ High-quality products</li>
            <li>✔ Professional customer support</li>
            <li>✔ Fast and secure delivery</li>
            <li>✔ 100% customer satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
