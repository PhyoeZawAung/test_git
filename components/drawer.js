import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContentView from "./Content";
const Drawer = createDrawerNavigator();
import TabScreen from "./tab";
const Home = ({ navigation }) => {
  return <TabScreen />;
};

const Favourite = ({ navigation }) => {
  return (
    <View>
      <ContentView name="Mary" position="leader" navigation={navigation} />
    </View>
  );
};
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      <Drawer.Screen name="Favourite" component={Favourite}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
