import React from "react";
import selectOrigin from "../slices/navSlice";
import { useSelector } from "react-redux";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { View, Text } from "react-native";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <View style={tw`flex-1`}>
      <MapView
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;
