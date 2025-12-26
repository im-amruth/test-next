import React from "react";
import styles from "@/styles/contactus.module.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | Eclat Cart",
  description: "Contact us for your queries",
};

export default function Contactus() {
  return (
    <div className={`${styles.contactPage} container py-5`}>
      <h1 className="text-center mb-4">Contact Us</h1>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <h4 className="mb-3">Send us a message</h4>

            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows={4}></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow p-4 h-100">
            <h4 className="mb-3">Contact Information</h4>

            <p><strong>📍 Address:</strong><br />123 Main Street, Dubai, UAE</p>
            <p><strong>📞 Phone:</strong><br />+971-123456789</p>
            <p><strong>✉ Email:</strong><br />support@eclatcart.com</p>

            <hr />

            <h5>Follow Us</h5>
            <div className={styles.social}>
              <a href="#">🌐 Facebook</a>
              <a href="#">📸 Instagram</a>
              <a href="#">✉ Message</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
