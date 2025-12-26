import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Releases | Eclat Cart",
  description: "Know about new releases",
};

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const newReleases: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "AED 119",
    image: "/images/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "AED 157",
    image: "/images/smartwatch.jpg",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: "AED 245",
    image: "/images/shoes.webp",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "AED 78",
    image: "/images/speaker.jpg",
  },
];

export default function NewReleasesPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>New Releases</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {newReleases.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              borderRadius: "6px",
              textAlign: "center",
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={150}
              style={{ objectFit: "contain" }}
            />

            <p style={{ margin: "10px 0" }}>{product.name}</p>
            <strong>{product.price}</strong>
          </div>
        ))}
      </div>
    </main>
  );
}
