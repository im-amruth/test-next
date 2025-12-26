import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns | Eclat Cart",
  description: "returns and orders",
};
export default function ReturnsOrdersPage() {
  return (
    <main style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Page Header Image */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Image
          src="/images/returns.png"
          alt="Returns and Orders"
          width={400}
          height={250}
          style={{ objectFit: "contain" }}
        />
        <h1 style={{ marginTop: "20px" }}>Returns & Orders</h1>
      </div>

      {/* Orders Info */}
      <section style={{ marginTop: "30px" }}>
        <h2>Your Orders</h2>
        <p>
          View your recent orders, track shipments, and manage returns from
          your account dashboard.
        </p>
      </section>

      {/* Return Rules */}
      <section style={{ marginTop: "30px" }}>
        <h2>Return Rules</h2>
        <ul>
          <li>Items can be returned within <strong>7 days</strong> of delivery.</li>
          <li>Product must be unused and in original packaging.</li>
          <li>Some items like personal care products are not returnable.</li>
          <li>Refunds are processed after quality check.</li>
        </ul>
      </section>

      {/* Refund Policy */}
      <section style={{ marginTop: "30px" }}>
        <h2>Refund Policy</h2>
        <p>
          Refunds are usually completed within <strong>5–7 business days</strong>
          after the returned item is received.
        </p>
      </section>

      {/* Payment Methods */}
      <section style={{ marginTop: "30px" }}>
        <h2>Payment Methods</h2>
        <ul>
          <li>Credit / Debit Cards</li>
          <li>UPI (Google Pay, PhonePe, Paytm)</li>
          <li>Net Banking</li>
          <li>Cash on Delivery (available on select items)</li>
        </ul>
      </section>

      {/* Help */}
      <section style={{ marginTop: "30px" }}>
        <h2>Need Help?</h2>
        <p>
          For issues related to orders, returns, or payments, please contact
          our customer support.
        </p>
      </section>
    </main>
  );
}
