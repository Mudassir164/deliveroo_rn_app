import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Redux/RestaurantSlice";
import {
  removeFromBasket,
  selectBaskitItem,
  selectBaskitTotalPrice,
} from "../Redux/Feature";
import SafeArea from "../theme/SafeArea";
import Icon from "react-native-vector-icons/Ionicons";
import { urlFor } from "../sanity";

const CartScreen = () => {
  const [groupedItemInBasket, setgroupedItemInBasket] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const baskitTotal = useSelector(selectBaskitTotalPrice);

  const items = useSelector(selectBaskitItem);

  useMemo(() => {
    const groupedItems = items.reduce((result, item) => {
      (result[item.id] = result[item.id] || []).push(item);
      return result;
    }, {});
    setgroupedItemInBasket(groupedItems);
  }, [items]);
  groupedItemInBasket;

  const removeTocart = (id) => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <SafeArea>
      <View className="w-full justify-center items-center p-4 bg-white">
        <Text className="text-lg font-bold">Basket</Text>
        <Text className=" text-gray-500">Nandos</Text>
        <CancelBtn
          iconName="close-outline"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View className="w-full flex-row bg-white mt-5 items-center space-x-4 p-4">
        <Image
          className="w-8 h-8 rounded-full bg-gray-300"
          source={{
            uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
          }}
        />
        <Text className="flex-1 font-bold text-lg">Deliver in 50-75 min</Text>
        <Text className="text-[#0F3866]">Change</Text>
      </View>
      <ScrollView className=" divide-y divide-gray-200  mt-5">
        {Object.entries(groupedItemInBasket).map(([key, item]) => {
          return (
            <View
              key={key}
              className="flex-row space-x-2 bg-white p-4  items-center"
            >
              <Text>{item.length} x</Text>
              <Image
                className="w-9 h-9  rounded-full bg-gray-300"
                source={{ uri: urlFor(item[0].image).url() }}
              />
              <Text className="flex-1 text-base ">{item[0].title}</Text>
              <Text className="text-gray-500">Rs.{item[0].price * 218}</Text>
              <TouchableOpacity
                onPress={() => {
                  removeTocart(key);
                }}
              >
                <Text className="text-[#0F3866]">Remove</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View className="bg-white p-4 space-y-4  mt-5 absloute bottom-1 left-0">
        <View className="w-full flex-row justify-between">
          <Text className="text-gray-500  text-xsm">Subtotal</Text>
          <Text className="text-gray-500 text-xsm">
            Rs.{(baskitTotal * 218).toFixed(2)}
          </Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text className="text-gray-500 text-xsm">Delivery Fee</Text>
          <Text className="text-gray-500 text-xsm">Rs.{300}</Text>
        </View>
        <View className="w-full flex-row justify-between">
          <Text className="font-bold">Order Total</Text>
          <Text className=" font-bold">
            Rs.{(baskitTotal * 218 + 300).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          className="justify-center items-center bg-[#0F3866] p-4 rounded-lg"
          onPress={() => {
            navigation.navigate("Preparing Order Screen");
          }}
        >
          <Text className="text-white font-bold text-lg">Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

const CancelBtn = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="absolute top-2 right-4 h-9 w-9 rounded-full justify-center items-center bg-[#0F3866]"
    >
      <Icon
        name={iconName}
        size={25}
        color="white"
        // className="font-bold text-red-600"
      />
    </TouchableOpacity>
  );
};
export default CartScreen;
