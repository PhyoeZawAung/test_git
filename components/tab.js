import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Button, FlatList } from "react-native";
import ContentView from "./Content";

const Tab = createBottomTabNavigator();

const renderItem = ({ item }) => {
  return (
    <ContentView
      name={item.name}
      position={item.position}
      navigation={item.navigation}
    />
  );
};

const All = ({ navigation }) => {
  const person = [
    { name: "John", position: "Leader", navigation: { ...navigation } },
    { name: "Marry", position: "Manager", navigation: { ...navigation } },
    { name: "Eric", position: "Manager", navigation: { ...navigation } },
    { name: "Hanna", position: "Sub Leader", navigation: { ...navigation } },
  ];
  return <FlatList data={person} renderItem={renderItem} />;
};
const Manager = ({ navigation }) => {
  return (
    <View>
      <Text>Manager</Text>
    </View>
  );
};
const BSE = ({ navigation }) => {
  return (
    <View>
      <Text>BSE</Text>
    </View>
  );
};
const Leader = ({ navigation }) => {
  return (
    <View>
      <Text>Leader</Text>
    </View>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: { display: "none" },
        tabBarLabelStyle: {
          fontSize: 16,
          position: "absolute",
          top: 12,
        },
        tabBarInactiveBackgroundColor: "#86e4f6",
        tabBarActiveBackgroundColor: "#86e4f6",
      }}
    >
      <Tab.Screen name="All" component={All}></Tab.Screen>
      <Tab.Screen name="Manager" component={Manager}></Tab.Screen>
      <Tab.Screen name="BSE" component={BSE}></Tab.Screen>
      <Tab.Screen name="Leader" component={Leader}></Tab.Screen>
    </Tab.Navigator>
  );
};
export default TabScreen;
