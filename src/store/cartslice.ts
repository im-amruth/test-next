// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image?: string;
  quantity: number;
  total: number;
}

interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<CartItem, "quantity" | "total">>
    ) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total = existingItem.quantity * existingItem.price;
      } else {
        state.cartItems.push({
          ...item,
          quantity: 1,
          total: item.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    decreaseItem: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (!item) return;

      item.quantity -= 1;
      item.total -= item.price;
      state.totalQuantity -= 1;
      state.totalPrice -= item.price;

      if (item.quantity === 0) {
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.total;
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
