import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FeatureCard from "./FeatureCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setrestaurant] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
      *[_type=="featured" && _id==$id]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->
        }
      }[0]
    `,
        { id: id }
      )
      .then((data) => setrestaurant(data?.restaurants));
    // .then((data) => {
    //   setfeatureCategories(data);
    // });
  }, []);
  //  (restaurant[0]);
  return (
    <View className="w-full">
      <View className="flex-row justify-between mt-4 px-4 items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <Icon size={25} color="#0F3866" name="arrow-forward-outline" />
      </View>

      <Text className="px-4 text-gray-500 text-xs">{description}</Text>
      <ScrollView horizontal className=" px-4 mt-4 ">
        {restaurant?.map((restaurant) => (
          <FeatureCard
            key={restaurant._id}
            id={restaurant._id}
            title={restaurant.name}
            ratting={restaurant.rating}
            location={restaurant.address}
            dishes={restaurant.dishes}
            genre={restaurant.type?.name}
            imageUrl={restaurant.image}
            long={restaurant.long}
            lat={restaurant.lat}
            description={restaurant.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
