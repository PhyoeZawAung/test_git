import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Button, FlatList } from "react-native";
import ContentView from "./Content";
import store from "../src/redux/store";
import { Provider, useSelector } from "react-redux";
import { isEmptyArray } from "formik";
const Tab = createBottomTabNavigator();

const renderItem = ({ item }) => {
  return (
    <ContentView
      name={item.name}
      position={item.position}
      id={item.id}
      fav={item.fav}
    />
  );
};

const All = ({ navigation }) => {
  const newPerson = useSelector((store) => store.person);
  return (
    <Provider store={store}>
      <FlatList data={newPerson} renderItem={renderItem} />
    </Provider>
  );
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
    <Provider store={store}>
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
    </Provider>
  );
};
export default TabScreen;
