import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Category({
  id,
  name,
  image,
  onSelect,
  select,
}: {
  id: number;
  name: string;
  image: any;
  onSelect: (name: string) => void;
  select: string;
}) {
  return (
    <Pressable style={styles.container} onPress={() => onSelect(name)}>
      <Image
        style={[styles.image, select === name && styles.select]}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 23,
  },
  image: {
    width: 55,
    height: 55,
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
  },
  select: {
    borderColor: "orange",
    borderWidth: 2,
    borderRadius: 27,
  },
});
