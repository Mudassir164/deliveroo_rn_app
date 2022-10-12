import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const RestaurantView = ({
  imageUrl,
  title,
  rating,
  genre,
  location,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <View className="w-full bg-white">
      <View>
        <Image
          className="w-full h-48"
          source={{ uri: urlFor(imageUrl).url() }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute top-3 z-10 justify-center items-center left-4 w-8 h-8 bg-white rounded-full"
        >
          <Icon name="arrow-back-outline" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <View className="p-4 space-y-2">
        <Text className="font-bold text-2xl">{title}</Text>
        <View className='flex-row space-x-2  items-center"'>
          <View className="flex-row space-x-2 pl-1 items-center">
            <Icon size={20} color="gray" name="star" />
            <Text className="text-xs font-bold text-gray-400">
              {rating} . {genre}
            </Text>
          </View>

          <View className="flex-row space-x-2 pl-1 items-center">
            <Icon size={20} color="gray" name="location-outline" />
            <Text className="text-xs font-bold text-gray-400">
              Nearby . {location}!
            </Text>
          </View>
        </View>
        <Text className=" font-bold text-gray-400">{description}</Text>
        <TouchableOpacity className="flex-row space-x-2 items-center py-2">
          <Icon size={20} color="gray" name="help-circle-outline" />
          <Text className="flex-1 font-bold text-xl">Have a Food Alergy ?</Text>
          <Icon size={20} color="red" name="chevron-forward-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantView;
