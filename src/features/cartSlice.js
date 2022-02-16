import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQty: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQty += 1;
      } else {
        const tempProduct = { ...action.payload, cartQty: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCartQty(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (state.cartItems[itemIndex].cartQty > 1) {
        state.cartItems[itemIndex].cartQty -= 1;
      } else if (state.cartItems[itemIndex].cartQty === 1) {
        const nextCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        state.cartItems = nextCartItems;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotal(state) {
      const { total, qty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQty } = cartItem;
          const totalPrice = price * cartQty;

          cartTotal.total += totalPrice;
          cartTotal.qty += cartQty;

          return cartTotal;
        },
        {
          total: 0,
          qty: 0,
        }
      );
      state.cartTotalPrice = total;
      state.cartTotalQty = qty;
    },
  },
});

export const { addToCart, removeFromCart, decreaseCartQty, clearCart, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
