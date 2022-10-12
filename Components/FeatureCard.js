import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeatureCard = ({
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
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant Screen", {
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
        });
      }}
      className="  bg-white rounded-lg overflow-hidden mr-5"
    >
      <Image source={{ uri: urlFor(imageUrl).url() }} className="w-64 h-32" />
      <View className="p-3 space-y-2">
        <Text className="font-bold text-xl">{title}</Text>
        <View className="flex-row space-x-2 pl-1 items-center">
          <Icon size={20} color="gray" name="star" />
          <Text className="text-xs font-bold text-gray-400">
            {ratting} . {genre}
          </Text>
          {/* <Text className="text-xs font-bold text-gray-400">{offer}</Text> */}
        </View>
        <View className="flex-row space-x-2 pl-1 items-center">
          <Icon size={20} color="gray" name="location-outline" />
          <Text className="text-xs font-bold text-gray-400">
            Nearby . {location}!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeatureCard;
