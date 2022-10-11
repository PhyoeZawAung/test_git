import React from "react";
import { DrawerContentScrollView,DrawerItem } from "@react-navigation/drawer";
import { View } from "react-native";



const CustomContent = (props) => {
  return (
    <DrawerContentScrollView{...props}>
      <View>
        <DrawerItem label="Home" onPress={() => props.navigation.navigate("Home")}></DrawerItem>
        <DrawerItem label="Favourite" onPress={() => props.navigation.navigate("Favourite")}></DrawerItem>
        <DrawerItem label="Login" onPress={()=>props.navigation.navigate("Login")}></DrawerItem>
      </View>
     

    </DrawerContentScrollView>
  )
}

export default CustomContent;