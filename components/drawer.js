import React from "react";
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContentView from "./Content";
const Drawer = createDrawerNavigator();
import TabScreen from "./tab";
import CustomContent from "./DrawerCustomContent";
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

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}


const DrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) =><CustomContent{...props}/>}>
      <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
      <Drawer.Screen name="Favourite" component={Favourite}></Drawer.Screen>
      
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
