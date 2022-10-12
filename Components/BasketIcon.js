import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBaskitItem, selectBaskitTotalPrice } from "../Redux/Feature";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBaskitItem);
  const baskitTotal = useSelector(selectBaskitTotalPrice);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Cart Screen");
      }}
      className="w-full absolute justify-center items-center bottom-5 left-1 z-50 "
    >
      <View className=" flex-row w-[95%] rounded-lg justify-between  items-center p-4 bg-[#0F3866] ">
        {/* bg-[#0F3866] */}
        <View className="py-1 px-2 bg-green-600">
          <Text className="font-bold text-xl text-white">{items.length}</Text>
        </View>
        <Text className="font-bold text-xl text-white">View Basket</Text>
        <Text className="font-bold text-sm text-white">
          Rs . {(baskitTotal * 229).toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BasketIcon;
