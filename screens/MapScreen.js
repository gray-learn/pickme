import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";

const MapScreen = () => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-1/2 `}>
        <Map />
      </View>
      <View style={tw`h-1/2 bg-blue-500`}></View>
    </View>
  );
};

export default MapScreen;
