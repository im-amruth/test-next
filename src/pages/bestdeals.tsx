import React from "react";
import styles from "@/styles/bestdeals.module.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Deals | Eclat Cart",
  description: "Know about our best deals",
};

export default function Bestdeals() {
  return (
    <div>
      <h1 >Best deals for you..!!</h1>

      <div className={styles.main}>
         <div className={styles.section}>
        <p className={styles.sectionText}>
          <b>Best Of Electronics</b>
        </p>
</div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img src="/images/electronics1.jpg" className={styles.image} />
            <p>Headset</p>
            <p><b>AED 50</b></p>
            <p className={styles.shop}>shop now</p>
          </div>
        </div>

        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img src="/images/electronics2.jpg" className={styles.image} />
            <p>Monitors</p>
            <p><b>AED 3258</b></p>
            <p className={styles.shop}>shop now</p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/electronics3jpg.jpg" />
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Printers</p>
            <p>
              <b>AED 856</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/electronics4.jpg" />
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Projectors</p>
            <p>
              <b>AED 3258</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/electronics6.jpg" />
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>smart watch</p>
            <p>
              <b>AED 1253</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.sectionText}>
            <b>Beauty,Food, Toys&more</b>
          </p>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image}  src="/images/beauty1.jpg" />
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>
              Coffee powder
            </p>
            <p>
              <b>Upto 80%off</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/beauty2.jpg"/>
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Cycles</p>
            <p>
              <b>Upto 70%off</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/beauty3.jpg" />
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Soft toys</p>
            <p>
              <b>10% off</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="/images/beauty4.jpg"/>
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Stationary</p>
            <p>
              <b>50% off</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
        <div className={styles.bestproducts}>
          <div className={styles.bestproductinfo}>
            <img className={styles.image} src="../images/toy.webp"/>
            <p style={{ fontSize: "5mm", marginBottom: "20px" }}>Toys</p>
            <p>
              <b>50% off</b>
            </p>
            <p className={styles.shop}>
              <b>shop now</b>
            </p>
          </div>
        </div>
</div>
   
      </div>
    
  );
}
