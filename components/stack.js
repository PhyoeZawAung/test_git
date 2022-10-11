import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import DrawerScreen from "./drawer";
import LoginScreen from "./Login";
const Detail = ({ route }) => {
  const { name, position } = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        Name:: {JSON.stringify(name)}
      </Text>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
        }}
      >
        position:: {JSON.stringify(position)}
      </Text>
    </View>
  );
};

const Login = () => {
  return (
    <LoginScreen/>
  )
}
const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Drawer"
          component={DrawerScreen}
        />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackScreen;
