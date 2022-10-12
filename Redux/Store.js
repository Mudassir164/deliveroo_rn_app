import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./Feature";
import restaurantReducer from "./RestaurantSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
