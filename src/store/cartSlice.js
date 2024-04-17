import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
  },
  reducers: {
    saveInCartAction: (state, action) => {
      let copyArray = [...state.cart];

      // 1. did we have in cart
      let findIndex = null;

      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      // 2. add new product and add count
      if (findIndex === null) {
        copyArray.push({
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        });
        state.totalProduct++;
        state.totalPrice += action.payload.price;
      } else {
        copyArray[findIndex].count++;
      }

      state.cart = copyArray;
    },

    deleteItemCartAction: (state, action) => {
      // get index where is maping

      // const {index} = action.payload

      let copyArray = [...state.cart];

      // 1. did we have in cart
      let findIndex = null;

      copyArray.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });
      if (findIndex !== null) {
        copyArray.splice(findIndex, 1);
      }

      state.cart = copyArray;
    },
  },
});

export const { saveInCartAction, deleteItemCartAction } = cartSlice.actions;
export default cartSlice.reducer;
