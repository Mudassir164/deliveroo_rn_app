// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import { TailwindProvider } from "tailwindcss-react-native";
import RestaurantScreen from "../Screens/RestaurantScreen";
import CartScreen from "../Screens/CartScreen";
import PreparingOrderScreen from "../Screens/PreparingOrderScreen";
import DeliveryScreen from "../Screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Restaurant Screen" component={RestaurantScreen} />
          <Stack.Screen
            name="Cart Screen"
            component={CartScreen}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="Preparing Order Screen"
            component={PreparingOrderScreen}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="Delivery Screen"
            component={DeliveryScreen}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

export default RootNavigation;
