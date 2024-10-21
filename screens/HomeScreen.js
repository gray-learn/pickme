import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import {
  setDestination,
  setOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
const HomeScreen = () => {
  const dispatch = useDispatch();
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
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} // delay time
          placeholder="Where from"
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          minLength={2}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            console.log(data);
            console.log(details);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
        />
      </View>
      <NavOptions />
    </SafeAreaView>
  );
};
export default HomeScreen;
