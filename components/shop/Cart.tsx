import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Cart() {
  return (
    <View style={{flexDirection:"row"}}>
      <Ionicons name="cart-outline" size={24} color="black" />
      <View style={styles.outText}>
        <Text style={styles.inText}>13</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outText: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:-8,
    marginTop:-6
  },
  inText: {
    fontSize:13,
    fontWeight:"bold",
    color:"#ffffff",

  },
});
