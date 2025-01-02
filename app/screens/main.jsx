import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Ezugi from "../Apisshow/Ezugi";
import Zili from "../Apisshow/Zili";
// State to track the active tab index

const Main = () => {
  const imageData = [
    { id: 3, source: require("../../assets/images/apigames01.png") },
    { id: 4, source: require("../../assets/images/apigames02.png") },
    { id: 5, source: require("../../assets/images/apigames03.png") },
    { id: 6, source: require("../../assets/images/apigames04.png") },
    { id: 7, source: require("../../assets/images/apigames05.png") },
    { id: 8, source: require("../../assets/images/apigames06.png") },
    { id: 9, source: require("../../assets/images/apigames07.png") },
  ];
  const imageData2 = [
    { id: 10, source: require("../../assets/images/apigames08.png") },
    { id: 11, source: require("../../assets/images/apigames09.png") },
    { id: 12, source: require("../../assets/images/apigames10.png") },
    { id: 13, source: require("../../assets/images/apigames11.png") },
    { id: 14, source: require("../../assets/images/apigames12.png") },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      id: 0,
      label: "Lobby",
      icon: require("../../assets/images/dashboard (1).png"),
    },
    {
      id: 1,
      label: "Ezugi",
      icon: require("../../assets/images/gamepad.png"),
    },
    {
      id: 2,
      label: "Zili",
      icon: require("../../assets/images/casino-chip.png"),
    },
  ];
  const providers = [
    require("../../assets/images/pragmatic-play-white-logo-removebg-preview.png"),
    require("../../assets/images/pragmatic-play-white-logo-removebg-preview.png"),
    require("../../assets/images/pragmatic-play-white-logo-removebg-preview.png"),
  ];
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/lottery.webp")}
          />
        </View>

        <View
          style={{
            marginTop: -50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              height: 50,
              borderColor: "##253b4a",
              borderWidth: 0.9,
              borderRadius: 5,
              paddingHorizontal: 15,
              backgroundColor: "#0F212E",
              width: 322,

              color: "white",
            }}
            placeholderTextColor="#FFFFFF"
            placeholder="Search Games"
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          // style={{ marginTop: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#0F212E",
              height: 50,
              alignItems: "center",
              paddingHorizontal: 10,
              justifyContent: "center",
              marginLeft: 20,
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            {tabs.map((tab, index) => (
              <TouchableOpacity
                key={tab.id}
                onPress={() => setActiveTab(tab.id)} // Update active tab state
                style={[
                  {
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                    backgroundColor:
                      activeTab === tab.id ? "#4A5C6B" : "transparent", // Active tab color
                    paddingHorizontal: 20,
                    paddingVertical: 3,
                    borderRadius: 10,
                    marginRight: 10,
                  },
                  activeTab === tab.id && styles.activeTabButton, // Apply additional styles if active
                ]}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                  }}
                  source={tab.icon}
                />
                <Text style={{ color: "white", fontWeight: "900" }}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        
        {activeTab === 0 && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 20,
                gap: 10,
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/images/game-control.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 15,
                }}
              >
                Eurabet Games
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.imageContainer}>
                {imageData2.map((item) => (
                  <View key={item.id} style={styles.imageWrapper}>
                    <Image source={item.source} style={styles.imageapi} />
                  </View>
                ))}
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 20,
                gap: 10,
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/images/lucky.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 15,
                }}
              >
                Ezugi Gaming
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.imageContainer}>
                {imageData.map((item) => (
                  <View key={item.id} style={styles.imageWrapper}>
                    <Image source={item.source} style={styles.imageapi} />
                  </View>
                ))}
              </View>
            </ScrollView>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: 20,
                gap: 10,
              }}
            >
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../assets/images/layers.png")}
              />
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: 900,
                  fontSize: 15,
                }}
              >
                Providers
              </Text>
            </View>
            <ScrollView
              style={{ marginBottom: 10 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.providercontainer}>
                {providers.map((provider, index) => (
                  <View key={index} style={styles.providersview}>
                    <Image style={styles.providerimage} source={provider} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </>
        )}
        {activeTab === 1 && <Ezugi />}
        {activeTab === 2 && <Zili />}
      </View>
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A2C38",
    // alignItems: "center",
    // height:100
    gap: 10,

    // alignItems: "center",
  },
  image: {
    width: "90%",
    resizeMode: "contain",
    borderRadius: 20,
    marginTop: -50,
  },
  imageapi: {
    width: 140,
    height: 180,
    borderRadius: 10,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 20,
  },
  providerimage: {
    width: 150,
    height: 100,
  },
  providercontainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 20,
  },
  providersview: {
    borderRadius: 10,
    backgroundColor: "#3B4956",
    alignItems: "center",
  },
  source: {
    resizeMode: "cover",
  },
});
