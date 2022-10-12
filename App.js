import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./Navigation/Navigation";
import { store } from "./Redux/Store";

import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
