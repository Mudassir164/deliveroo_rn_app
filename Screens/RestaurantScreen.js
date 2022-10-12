import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import SafeArea from "../theme/SafeArea";
import RestaurantView from "../Components/RestaurantView";
import DishRow from "../Components/DishRow";
import { useDispatch, useSelector } from "react-redux";
import { addFromBasket, selectBaskitItem } from "../Redux/Feature";
import BasketIcon from "../Components/BasketIcon";
import { setrestaurant } from "../Redux/RestaurantSlice";
import Icon from "react-native-vector-icons/Ionicons";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      title,
      description,
      location,
      imageUrl,
      ratting,
      genre,

      lat,
      long,
      dishes,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setrestaurant({
        id,
        title,
        description,
        location,
        imageUrl,
        ratting,
        genre,

        lat,
        long,
        dishes,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const items = useSelector(selectBaskitItem);

  return (
    <SafeArea>
      {items.length > 0 && <BasketIcon />}

      <ScrollView>
        <RestaurantView
          location={location}
          genre={genre}
          rating={ratting}
          imageUrl={imageUrl}
          title={title}
          description={description}
        />
        <View className="p-4">
          <Text className=" font-bold text-xl">Menu</Text>
        </View>

        <View className="pb-36">
          {dishes?.map((dish) => (
            <DishRow
              title={dish.name}
              image={dish.image}
              description={dish.short_description}
              key={dish._id}
              id={dish._id}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantScreen;
