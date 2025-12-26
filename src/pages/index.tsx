
import Head from "next/head";
import Banner from "../components/banner";
import Offerproducts from "../components/offerproducts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Eclat Cart</title>
        <meta name="description" content="welcome to our store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div>
        <Banner />
        <Offerproducts />
      </div>
    </>
  );
}