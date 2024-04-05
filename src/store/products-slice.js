import { createSlice } from "@reduxjs/toolkit";
if (localStorage.getItem("cart") === null) {
  localStorage.setItem("cart", []);
}
function intState() {
  if (localStorage.cart === "") {
    return [];
  } else {
    const stateLocal = JSON.parse(localStorage.cart);
    return stateLocal;
  }
}
const productsSlice = createSlice({
  initialState: intState(),
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      const found = state.find(
        (product) => product[0].id === action.payload[0].id
      );
      if (found === undefined) {
        state.push(action.payload);
      }
      localStorage.cart = JSON.stringify(state);
    },
    delProduct: (state, action) => {
      state = state.filter((product) => product[0].id !== action.payload);
      localStorage.cart = JSON.stringify(state);
      return state.filter((product) => product[0].id !== action.payload);
    },
    changeQauntity: (state, action) => {
      state.forEach((element) => {
        if (element[0].id === action.payload[0]) {
          element[1] = action.payload[1];
        }
      });
      localStorage.cart = JSON.stringify(state);
    },
    clear: (state) => {
      state = [];
      localStorage.cart = JSON.stringify(state);
      return (state = []);
    },
  },
});

export const { addProduct, delProduct, changeQauntity, clear } =
  productsSlice.actions;
export default productsSlice.reducer;
