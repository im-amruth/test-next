import { addToCart } from "../store/cartslice";
import { useAppDispatch } from "../store/hooks";

interface Product {
  id: number;
  title: string;
  price: number;
  image?: string;
}

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Item added to cart!");
  };

  return (
    <button
      style={{ marginLeft: "20px" }}
      className="btn btn-sm btn-primary"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
}
