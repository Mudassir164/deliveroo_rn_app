import { View, Text, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <View className="mx-1 rounded-lg overflow-hidden">
      <Image className="w-20 h-20" source={{ uri: imageUrl }} />
      <Text className="text-white absolute bottom-1 font-bold left-1 ">
        {title}
      </Text>
    </View>
  );
};

export default CategoryCard;
