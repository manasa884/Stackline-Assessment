import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { ResponseData, getProductData } from "@/api/mock";
import { RootState } from "@/lib/store";

type ProductsState = {
  products: ResponseData;
  status: string | null;
};

const initialState: ProductsState = {
  products: [],
  status: null,
};

export const fetchProductData = createAsyncThunk(
  "product/fetchProductData",
  async () => {
    const response = await getProductData();

    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchProductData.fulfilled,
      (state, action: PayloadAction<ResponseData>) => {
        state.status = "succeeded";
        state.products = action.payload;
      }
    );
  },
});

export default productSlice.reducer;

export const selectAllProducts = (state: RootState) => state.products.products;
