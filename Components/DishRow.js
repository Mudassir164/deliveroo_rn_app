import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import {
  addFromBasket,
  removeFromBasket,
  selectBaskitItem,
  selectBaskitItemWithId,
} from "../Redux/Feature";

const DishRow = ({ id, title, description, image, price }) => {
  const [isPressed, setisPressed] = useState(false);
  //   const [counter, setcounter] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBaskitItemWithId(state, id));
  const addTocart = (productItems) => {
    dispatch(addFromBasket({ ...productItems }));
  };
  const removeTocart = (id) => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <View className=" bg-white mt-2">
      <TouchableOpacity
        className="flex-row space-x-2 px-4 pt-4 pb-2  items-center "
        onPress={() => {
          setisPressed(!isPressed);
        }}
      >
        <View className="flex-1 space-y-1">
          <Text className="font-bold text-xl">{title}</Text>
          <Text className="text-gray-500  font-bold">{description}</Text>
          <Text className="text-gray-500 font-bold">Rs . {price * 229}</Text>
        </View>
        <Image source={{ uri: urlFor(image).url() }} className="w-20 h-20" />
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row  items-center p-4">
          <CountBtn
            onPress={() => {
              removeTocart(id);
            }}
            iconName="remove-outline"
            condition={items.length > 0 ? true : false}
          />
          <Text className="font-bold text-xl mx-4">{items.length}</Text>
          <CountBtn
            onPress={() => {
              addTocart({ id, title, description, image, price });
            }}
            iconName="add-outline"
            condition={true}
          />
        </View>
      )}
    </View>
  );
};

const CountBtn = ({ iconName, onPress, condition }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={` h-9 w-9 rounded-full justify-center items-center ${
        condition ? "bg-[#0F3866]" : "bg-slate-500"
      }`}
    >
      <Icon
        name={iconName}
        size={30}
        color="white"
        // className="font-bold text-red-600"
      />
    </TouchableOpacity>
  );
};
export default DishRow;
