import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SafeArea = ({ children }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default SafeArea;

const styles = StyleSheet.create({});
