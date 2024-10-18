import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import tw from "tailwind-react-native-classnames";
const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={tw`text-red-500 p-10`}>Pickme!</Text> */}
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={require("../assets/pickme.png")} // Corrected path for local image
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};
// const styles = StyleSheet.create({});
export default HomeScreen;
