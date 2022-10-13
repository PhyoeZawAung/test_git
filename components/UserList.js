import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";

const UserListScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
      });
  }, []);
  const renderItem = ({ item }) => {
    const name = item.first_name + " " + item.last_name;
    return (
      <View style={styles.user}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 60, height: 60, borderRadius: 50 }}
        />
        <View style={{ paddingLeft: 20 }}>
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={data.data} renderItem={renderItem} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  user: {
    flexDirection: "row",
    borderBottomWidth: 1,
    width: 350,

    padding: 10,
    alignItems: "center",
  },
});

export default UserListScreen;
