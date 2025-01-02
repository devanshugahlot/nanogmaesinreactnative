import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Zili = () => {
  const Zilidata = [
    { id: 7, source: require("../../assets/images/apigames29.png") },
    { id: 8, source: require("../../assets/images/apigames30.png") },
    { id: 9, source: require("../../assets/images/apigames31.png") },
    { id: 9, source: require("../../assets/images/apigames32.png") },
    { id: 9, source: require("../../assets/images/apigames33.png") },
    { id: 9, source: require("../../assets/images/apigames34.png") },
    { id: 9, source: require("../../assets/images/apigames35.png") },
    { id: 9, source: require("../../assets/images/apigames36.png") },
    { id: 9, source: require("../../assets/images/apigames37.png") },
    { id: 9, source: require("../../assets/images/apigames38.png") },
    { id: 9, source: require("../../assets/images/apigames39.png") },
    { id: 9, source: require("../../assets/images/apigames40.png") },
    { id: 9, source: require("../../assets/images/apigames41.png") },
    { id: 9, source: require("../../assets/images/apigames42.png") },
    { id: 9, source: require("../../assets/images/apigames43.png") },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={Zilidata}
        contentContainerStyle={ styles.listContainer }
        numColumns={3} // Number of columns
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Zili;

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
