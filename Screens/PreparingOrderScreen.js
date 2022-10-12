import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import SafeArea from "../theme/SafeArea";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery Screen");
    }, 5000);
  }, []);

  return (
    <SafeArea>
      <View className="flex-1 bg-white space-x-4 justify-center items-center">
        <Animatable.Image
          source={require("../assets/delivery.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="w-52 h-52"
        />
        <Text className=" text-base">
          Waiting for Restaurant to accept your Order!
        </Text>
        <Animatable.Image
          source={require("../assets/loading.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="w-24 h-24"
        />
      </View>
    </SafeArea>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
