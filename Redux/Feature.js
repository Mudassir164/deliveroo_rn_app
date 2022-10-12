import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addFromBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems = [...state.items];
      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn(`this product is not in your basket`);
      }
      state.items = newItems;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFromBasket, removeFromBasket } = BasketSlice.actions;
export const selectBaskitItem = (state) => state.basket.items;
export const selectBaskitItemWithId = (state, id) =>
  state.basket.items.filter((itm) => itm.id === id);
export const selectBaskitTotalPrice = (state) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default BasketSlice.reducer;
