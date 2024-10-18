import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native-web";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: require("../assets/pickme.png"),
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "",
    screen: "EatsScreen", // TBD
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id} // rednder the upon key
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            {/*  render image */}
          </View>
          <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black  rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
