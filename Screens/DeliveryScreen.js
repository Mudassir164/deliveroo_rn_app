import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import SafeArea from "../theme/SafeArea";
import Icon from "react-native-vector-icons/Ionicons";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../Redux/RestaurantSlice";
import { selectBaskitItem, selectBaskitTotalPrice } from "../Redux/Feature";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectRestaurant);
  const baskitTotal = useSelector(selectBaskitTotalPrice);

  const items = useSelector(selectBaskitItem);
  "hello", restaurant;
  return (
    <View className="bg-[#0F3866] flex-1 ">
      <SafeAreaProvider>
        <SafeAreaView className="z-50 px-5">
          <View className="flex-row justify-between items-center ">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Icon name="close-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text className="font-light text-white text-lg ">Order Help</Text>
          </View>
          <View className="bg-white p-5 space-y-3 z-50 rounded-xl shadow-sm ">
            <View className="flex-row justify-between items-center ">
              <View>
                <Text className="text-sm text-gray-500 text-light">
                  Estimated Arrival
                </Text>
                <Text className="text-3xl font-bold text-light">
                  45-55 Minutes
                </Text>
              </View>
              <Image
                source={{
                  uri: "https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s",
                }}
                className="w-14 h-14"
              />
            </View>
            <Progress.Bar indeterminate={true} size={30} color="#0F3866" />
            <Text className="text-gray-500 mt-3">
              Your Order {restaurant.title} is being prepared
            </Text>
          </View>
        </SafeAreaView>
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          className="flex-1 -z-10 -mt-10 border-2 border-blue-500"
          mapType="mutedStandard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.long,
            }}
            title={restaurant.title}
            description={restaurant.description}
            pinColor="#0F3866"
            identifier="origin"
          />
        </MapView>
        <View className="flex-row space-x-4 p-5 bg-white items-center">
          <Image
            className="w-14 h-14"
            source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450",
            }}
          />
          <View className="flex-1">
            <Text className="font-bold text-lg">Irfan Janejo</Text>
            <Text className="text-gray-500 ">Your Rider</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text className="text-[#0F3866] font-bold">Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    </View>
  );
};

export default DeliveryScreen;
