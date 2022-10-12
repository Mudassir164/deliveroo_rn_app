import { View, Text, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 px-4  ">
      <View className="flex-1 flex-row p-2 items-center bg-gray-200 space-x-2">
        <Icon size={20} color="gray" name="search-outline" />
        <TextInput
          keyboardType="default"
          placeholder="Restaurants and cuisines"
        />
      </View>
      <View className="rotate-90">
        <Icon size={30} color="#0F3866" name="options-outline" />
      </View>
    </View>
  );
};

export default SearchBar;
