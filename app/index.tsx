import { Link, useRouter } from "expo-router";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const onlogin = () => {
    router.navigate("/login");
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
      }}
    >
            <StatusBar barStyle={"light-content"} backgroundColor="black" />

      {/* <Text>Welcome to my frist app devanshu gahlot</Text>
      <Link href={"/login"}> go login page</Link> */}
      <View>
        <Image source={require("../assets/images/in-page-optimize.png")} />

        <Text
          style={{ fontSize: 40, fontFamily: "Helvetica", fontWeight: 900 }}
        >
          Get Start
        </Text>
        <Text
          style={{ fontSize: 40, fontFamily: "Helvetica", fontWeight: 900 }}
        >
          With <Text style={{ color: "#EC4041" }}>Devanshu</Text>!
        </Text>
      </View>
      <TouchableOpacity
        onPress={onlogin}
        activeOpacity={0.6}
        style={{
          backgroundColor: "rgb(61,152,231)",
          paddingHorizontal: 70,
          paddingVertical: 16,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
}
