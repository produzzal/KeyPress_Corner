import { TProduct } from "@/types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedProduct: TProduct | null;
}

const initialState: ProductState = {
  selectedProduct: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<TProduct>) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
