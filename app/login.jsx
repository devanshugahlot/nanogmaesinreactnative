import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons"; // Import the icon
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const onsignup = () => {
    router.navigate("/signup");
  };
  const ohhome = () => {
    router.push("/home");
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 25,
        gap: 30,
        height: 800,
        justifyContent: "center",
      }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor="black" />
      <View>
        <Text style={styles.maintext}>Welcome back</Text>
        <Text>Enter your credential to continue</Text>
      </View>
      <View style={{ gap: 20 }}>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.inputFieldWithIcon}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureText}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setSecureText(!secureText)}
          >
            <Icon
              name={secureText ? "eye-off-outline" : "eye-outline"} // Icon changes
              size={24}
              color="#333"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={ohhome} style={styles.loginbutton}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <Image
            style={styles.otherlogin}
            source={require("../assets/images/2504914.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.otherloginf}
            source={require("../assets/images/facebook_2504903.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.otherloginf}
            source={require("../assets/images/letter-x_17158139.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: "center" }}>
          Dont have an account?
          <Text onPress={onsignup} style={{ fontSize: 18, fontWeight: "bold" }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  maintext: {
    fontSize: 30,
    fontWeight: "900",
  },
  input: {
    height: 50,
    borderColor: "#CCD9DD",
    borderWidth: 0.9,
    borderRadius: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    // marginBottom: 15,
  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCD9DD",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  inputFieldWithIcon: {
    flex: 1,
    height: 50,
    paddingLeft: 15,
    paddingRight: 50, // Space for the icon
  },
  iconWrapper: {
    position: "absolute",
    right: 15, // Position the icon inside the TextInput
  },
  loginbutton: {
    backgroundColor: "rgb(61,152,231)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 30,
    textAlign: "center",
    borderRadius: 20,
  },
  otherlogin: {
    width: 38,
    height: 38,
  },
  otherloginf: {
    width: 38,
    height: 38,
  },
});
