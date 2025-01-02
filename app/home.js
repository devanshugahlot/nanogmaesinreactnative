import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Main from "./screens/main";
import Profile from "../app/screens/profile";
import Settings from "../app/screens/settings";
import Notifications from "../app/screens/notifications";
import { Image } from "react-native";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Tabs for the Home Screen
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Profile") iconName = "person";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#0F212E", // Change to your desired background color
        },
      })}
    >
      <Tab.Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// Main Drawer with Tabs inside it
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#0F212E", // Set your desired background color here
        },
        drawerActiveTintColor: "tomato", // Active item text color
        drawerInactiveTintColor: "gray", // Inactive item text color
        drawerActiveBackgroundColor: "#4A5C6B", // Active item background color
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerTitle: () => (
            <Image
              source={require("../assets/images/logo_small.webp")}
              style={{ width: 50, height: 70, resizeMode: "contain" }}
            />
          ),
          headerStyle: {
            backgroundColor: "#0F212E",
          },
          headerTitleStyle: {
            color: "white", // Set the title text color to white
          },
        }}
      />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
