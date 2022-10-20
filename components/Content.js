import React from "react";

import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Icon } from "@rneui/themed";
import { GetFavouriteAction } from "../src/redux/actions/GetFavourite";
import { useSelector,useDispatch } from "react-redux";


const ContentView = (props) => {
  const dispatch = useDispatch();
  
  let fav = props.fav;
  const addItem = () => {
    dispatch(GetFavouriteAction({ name:props.name, position:props.position, navigation:props.navigation,fav:fav }));
  }
  return (
    
    <View style={{ paddingHorizontal: 20 }}>
      <Pressable
        onPress={() => {
          props.navigation.navigate("Detail", {
            name: props.name,
            position: props.position,
          });
        }}
        style={styles.contentContainer}
      >
        <Image
          source={require("../assets/contact.png")}
          style={{ width: 50, height: 50 }}
        ></Image>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.position}>{props.position}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Pressable onPress={() => {
            
            if (!fav) {
              fav = true;
              addItem();
              alert("add to favourite");
              
            } else {
              alert("already added");
            }
            
          }}>
            <Icon name="star" size={30} style={styles.icon} />
          </Pressable>
          <Pressable>
            <Icon name="phone" size={30} style={styles.icon} />
          </Pressable>
        </View>
      </Pressable>
      </View>
      
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  position: {
    fontSize: 14,
    color: "#363636",
    paddingLeft: 20,
  },
  iconContainer: {
    flexDirection: "row",

    position: "absolute",
    right: 20,
  },
  icon: {
    marginLeft: 15,
  },
});
export default ContentView;
