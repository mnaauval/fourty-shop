import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  items: [],
  status: null,
  //   error: null,
};

// export const productsFetch = createAsyncThunk("products/productsFetch", async (id = null, { rejectWithValue }) => {
//   try {
//     const response = await axios.get("http://localhost:5000/products");
//     return response?.data;
//   } catch (error) {
//     return rejectWithValue("Error fetching products");
//   }
// });
export const productsFetch = createAsyncThunk("products/productsFetch", async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response?.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, //generate action creators
  // extraReducers: {
  //   // handle the action when the thunk is resolved
  //   [productsFetch.pending]: (state, action) => {
  //     // immersively change the state with immer library
  //     state.status = "pending";
  //   },
  //   [productsFetch.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   [productsFetch.rejected]: (state, action) => {
  //     state.status = "failed";
  //     state.error = action.payload;
  //   },
  // },
});

export default productsSlice.reducer;
