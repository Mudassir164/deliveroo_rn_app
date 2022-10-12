import { View, Text, Image } from "react-native";
import React from "react";
// import { BeakerIcon } from "@heroicons/react/24/outline";
// import { UserIcon } from "react-native-heroicons/outline";
import Icon from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View className="flex-row  items-center pb-5   space-x-2 px-4">
      <Image
        className="w-7 h-7 rounded-full p-4 "
        source={{
          uri: "https://res.cloudinary.com/abcnode/image/upload/v1663844823/632c416f20db85be7063857d_profile.jpg",
        }}
      />
      <View className="flex-1">
        <Text className="font-bold text-xs text-gray-400">Delever Now!</Text>
        <Text className="font-bold text-xl items-center">
          Current Location
          <Icon size={20} color="#0F3866" name="chevron-down-outline" />
        </Text>
      </View>
      <Icon size={35} color="#0F3866" name="person-outline" />
    </View>
  );
};

export default Header;
