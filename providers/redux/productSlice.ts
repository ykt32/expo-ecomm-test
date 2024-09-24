import { createSlice } from "@reduxjs/toolkit";
type Product = {
  id: number;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: any;
  favourite: boolean;
};
interface productState {
  product: Product;
}

const initialState: productState = {
  product: {
    id: 1,
    brand: "H&M",
    title: "Oversized Fit Printed Mesh T-Shirt",
    star: 4.9,
    quantity: 136,
    price: 295.0,
    discount: 550.0,
    image: "t1",
    favourite: false,
  },
};

const productSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    // Other reducers go here
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
