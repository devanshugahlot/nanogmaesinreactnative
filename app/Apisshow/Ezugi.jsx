import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

const Ezugi = () => {
  const Ezugidata = [
    { id: 3, source: require("../../assets/images/apigames13.png") },
    { id: 4, source: require("../../assets/images/apigames14.png") },
    { id: 5, source: require("../../assets/images/apigames15.png") },
    { id: 6, source: require("../../assets/images/apigames16.png") },
    { id: 7, source: require("../../assets/images/apigames17.png") },
    { id: 8, source: require("../../assets/images/apigames18.png") },
    { id: 9, source: require("../../assets/images/apigames19.png") },
    { id: 9, source: require("../../assets/images/apigames20.png") },
    { id: 9, source: require("../../assets/images/apigames21.png") },
    { id: 9, source: require("../../assets/images/apigames22.png") },
    { id: 9, source: require("../../assets/images/apigames23.png") },
    { id: 9, source: require("../../assets/images/apigames24.png") },
    { id: 3, source: require("../../assets/images/apigames25.png") },
    { id: 4, source: require("../../assets/images/apigames26.png") },
    { id: 5, source: require("../../assets/images/apigames27.png") },
    { id: 6, source: require("../../assets/images/apigames28.png") },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={Ezugidata}
        contentContainerStyle={styles.listContainer}
        numColumns={3} // Number of columns
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
      />
    </View>
  );
};

export default Ezugi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    marginBottom: 20,
    marginRight: 10, // Space between images
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});
