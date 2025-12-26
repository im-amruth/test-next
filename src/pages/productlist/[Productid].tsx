import { Productservices } from "@/services/product-service";
import AddToCartButton from "@/components/AddToCartButton";
import Head from "next/head";

type ProductPageProps = {
  productdetail: any;
};

export default function Productdetails({ productdetail }: ProductPageProps) {
  return (
    <>
      <Head>
        <title>Product details | Eclat Cart</title>
        <meta name="description" content="Details about the product" />
      </Head>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={productdetail.image}
              alt={productdetail.title}
              className="img-fluid"
              style={{ height: "350px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h2>{productdetail.title}</h2>
            <p className="text-muted">{productdetail.category}</p>

            <h3 className="text-success">AED {productdetail.price}</h3>

            <p className="mt-3">{productdetail.description}</p>

            <div className="d-flex align-items-center mb-2">
              <span className="me-2">⭐ {productdetail.rating.rate}</span>
              <small className="text-muted">
                ({productdetail.rating.count} reviews)
              </small>
            </div>

            <p className="mt-3">
              <strong>Stock:</strong>{" "}
              <span className="text-success">Available</span>
            </p>

            <button className="btn btn-warning me-2">Buy Now</button>
            <AddToCartButton product={productdetail} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { Productid } = context.params;

  try {
    const productdetail = await Productservices.getProductById(Productid);

    if (!productdetail || !productdetail.id) {
      return { notFound: true };
    }

    return {
      props: {
        productdetail,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
