import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice"

const loadCartFromStorage = () => {
  if (typeof window === "undefined") return undefined;

  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
   preloadedState: {
    cart: loadCartFromStorage(),
  },
});

store.subscribe(() => {
  if (typeof window !== "undefined") {
    localStorage.setItem(
      "cart",
      JSON.stringify(store.getState().cart)
    );
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;