import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    saveAllProductAction: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { saveAllProductAction } = productSlice.actions;
export default productSlice.reducer;
