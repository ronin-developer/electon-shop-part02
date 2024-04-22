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
        state.totalProduct--;
        state.totalPrice = subTotal(copyArray);
      }

      state.cart = copyArray;
    },
    setPriceHandler: (state, action) => {
      const { increment, index } = action.payload;

      let copyArray = [...state.cart];

      copyArray[index].cartTotal += copyArray[index].price * increment;

      state.totalPrice = subTotal(copyArray);

      if (copyArray[index].count === 1 && increment === -1) {
        copyArray.splice(index, 1);
        state.totalProduct--;
      } else {
        copyArray[index].count += increment;
      }

      state.cart = copyArray;
    },
  },
});

// handle cartTotal
function subTotal(arrayCart) {
  return arrayCart.reduce((acc, current) => {
    return acc + current.cartTotal;
  }, 0);
}

export const { saveInCartAction, deleteItemCartAction, setPriceHandler } =
  cartSlice.actions;
export default cartSlice.reducer;
