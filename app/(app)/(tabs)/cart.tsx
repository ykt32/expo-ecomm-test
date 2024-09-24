import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function Cart() {
  return (
    <View style={{ flex:1,justifyContent:"center",alignItems:"center"}}>
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          // backgroundColor: '',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../../assets/images/shop/cartEmpty.json")}
      />
      <Text>Cart is Empty!</Text>
    </View>
  );
}
