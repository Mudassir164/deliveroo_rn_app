import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    description: null,
    dishes: null,
  },
};

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setrestaurant: (state, action) => {
      //  (state.restaurant);
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setrestaurant } = RestaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;

export default RestaurantSlice.reducer;
