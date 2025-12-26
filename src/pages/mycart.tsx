 "use client";

import {
  addToCart,
  removeFromCart,
  decreaseItem,
  clearCart,
} from "../store/cartslice"
import { useAppDispatch, useAppSelector } from "../store/hooks"

export default function CartPage() {
  const dispatch = useAppDispatch();

  const { cartItems, totalQuantity, totalPrice } = useAppSelector(
    (state) => state.cart
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Shopping Cart</h2>

      {/* empty cart message */}
      {cartItems.length === 0 ? (
        <div className="alert alert-info">Your cart is empty!</div>
      ) : (
        <>
          <div className="d-flex justify-content-end mb-3">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="card p-3 mb-3 shadow-sm">
              <div className="d-flex justify-content-between align-items-center">

                {/* Item Info */}
                <div>
                  <img
            src={item.image}
            alt={item.title}
            style={{ width: 80, height: 80, objectFit: "contain" }}
          />
          <h5>{item.title}</h5>
                  <p className="mb-1">Price: AED {item.price}</p>
                  <p className="text-muted mb-0">Subtotal: AED{item.total}</p>
                </div>

                {/* Quantity Control */}
                <div className="d-flex align-items-center gap-2">

                  {/* decrease button */}
                  <button
                    className="btn btn-sm btn btn-outline-dark"
                    onClick={() => dispatch(decreaseItem(item.id))}
                  >
                    -
                  </button>

                  <span className="fs-5">{item.quantity}</span>

                  {/* increase using addToCart */}
                  <button
                    className="btn btn-sm btn btn-outline-dark"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                </div>

                {/* remove button */}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* CART SUMMARY */}
          <div className="card p-3 shadow mt-4">
            <h4>Cart Summary</h4>
            <p>Total Items: <strong>{totalQuantity}</strong></p>
            <p>Total Price: <strong>AED {totalPrice.toFixed(2)}</strong></p>
        <div><button type="button" className="btn btn-success">Check Out</button></div>
          </div>
          
        </>
      )}
    </div>
  );
}

