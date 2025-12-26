export const config = {
  runtime: "nodejs",
};

import Productcard from "@/components/productcard";
import { Productservices } from "@/services/product-service";
import type { Product } from "@/types";
import Head from "next/head";

type Props = {
  products: Product[];
};

export default function Products({ products }: Props) {
  return (
    <>
      <Head>
        <title>All Products | Eclat Cart</title>
        <meta name="description" content="Explore our products" />
      </Head>

      <p style={{ fontSize: "10mm", margin: "20px" }}>
        <b>All Products</b>
      </p>

      <p style={{ fontSize: "4mm", marginLeft: "5mm", marginTop: "-10px" }}>
        Prices may vary according to size and colour
      </p>

      {products.map((product) => (
        <Productcard key={product.id} products={product} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  try {
    const products = await Productservices.getProducts();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
      },
    };
  }
}
