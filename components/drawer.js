import React from "react";
import { View, Text, Button ,FlatList} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContentView from "./Content";
const Drawer = createDrawerNavigator();
import TabScreen from "./tab";
import CustomContent from "./DrawerCustomContent";

import store from "../src/redux/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { GetFavouriteAction } from "../src/redux/actions/GetFavourite";


const FavScreen = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.favItem)
 
  const renderItem = ({ item }) => {
    return (
      <ContentView name={item.name}
        position={item.position}
        navigation={item.navigation}
        fav={item.fav} />
    )
    
  }
  return (
    
    <View>
      <FlatList data={data} renderItem={renderItem}/>
      
      <Text>{JSON.stringify(data)}</Text>
    </View>
  )
}
const Home = ({ navigation }) => {
  return <TabScreen />;
};

const Favourite = ({ navigation }) => {
  return (

    <Provider store={store}>
      <FavScreen navigation={navigation} />

    
    <View>
     
    </View>

    </Provider>
    
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
