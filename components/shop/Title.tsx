import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export type titleProps = {
  title: string;
  action: string;
};

export default function Title({ title, action }: titleProps) {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.category}>{title}</Text>
        <Pressable>
          <Text style={styles.text}>{action}</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop:20,
    marginBottom:15
  },
  category: {
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    color: "gray",
    fontWeight: "300",
    fontSize: 15,
  },
});
