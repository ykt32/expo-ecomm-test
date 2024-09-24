import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import React from "react";
// import { useLocalSearchParams } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { Stack } from "expo-router";
import { Pressable } from "react-native";
import Cart from "@/components/shop/Cart";
import ViewPager from "@/components/shop/ViewPager";
import Ionicons from "@expo/vector-icons/Ionicons";
import { description, selectItems } from "@/data";

import BottomSheet, { BottomSheetView ,BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {Picker} from '@react-native-picker/picker';


const { width, height } = Dimensions.get("window");

export default function DetailScreen() {
  const product = useAppSelector((state) => state.products.product);

  const ColorBox = ({
    id,
    name,
    bgColor,
    stock,
  }: {
    id: string;
    name: string;
    bgColor: string;
    stock: boolean;
  }) => (
    <Pressable
      style={[
        styles.circle,
        { backgroundColor: bgColor, borderWidth: 0.2, borderColor: "gray" },
      ]}
    >
      <Ionicons
        name="checkmark"
        size={19}
        color={stock ? (bgColor == "#FFFFFF" ? "black" : "white") : bgColor}
      />
    </Pressable>
  );
  const SizeBox = ({
    id,
    name,
    stock,
  }: {
    id: string;
    name: string;
    stock: boolean;
  }) => (
    <Pressable
      style={[
        styles.circle,
        stock
          ? { backgroundColor: "#00000090" }
          : { borderWidth: 1, borderColor: "00000060" },
      ]}
    >
      <Text
        style={[
          { fontSize: 10, fontWeight: "600" },
          stock && { color: "white" },
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );

  return (
    <View>
      <Stack.Screen
        options={{
          headerBackTitle: "Home",
          headerTitle: "detail",
          headerTintColor: "black",
          headerStyle: { backgroundColor: "white" },
          headerRight: () => (
            <Pressable>
              <Cart />
            </Pressable>
          ),
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ViewPager />

        <View style={styles.detailContainer}>
          <View style={[styles.brandContainer, styles.row]}>
            <View style={styles.row}>
              <Text style={styles.brand}>{product.brand}</Text>
              <Ionicons
                name="star"
                size={12}
                color="orange"
                style={{ paddingTop: 1 }}
              />
              <Text style={styles.star}>{product.star}</Text>
              <Text style={styles.quantity}>({product.quantity})</Text>
            </View>
            <Pressable>
              <Ionicons
                name="heart"
                size={20}
                color="#E66F2D"
                style={{ paddingTop: 1 }}
              />
            </Pressable>
          </View>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.discount}>{product.discount}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>

          <View
            style={
              width > 600
                ? { flexDirection: "row", gap: 40 }
                : { flexDirection: "column" }
            }
          >
            <View>
              <Text style={styles.colorTitle}>Choose Colors</Text>
              <View style={styles.color}>
                {selectItems.colors.map((color) => (
                  <ColorBox key={color.id} {...color} />
                ))}
              </View>
            </View>

            <View>
              <Text style={styles.colorTitle}>Size</Text>
              <View style={styles.color}>
                {selectItems.sizes.map((size) => (
                  <SizeBox key={size.id} {...size} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Ionicons name="cart-outline" size={20} color="black" />
          <Text style={styles.btnText}>ADD TO CART</Text>
        </Pressable>
        <Pressable style={[styles.btn, { backgroundColor: "black" }]}>
          <Text style={[styles.btnText, { color: "white" }]}>BUY NOW</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  detailContainer: {
    marginTop: 20,
    marginHorizontal: 15,
  },
  brandContainer: {
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  brand: {
    color: "gray",
    fontWeight: "600",
    marginRight: 7,
  },
  star: {
    fontSize: 13,
    marginHorizontal: 2,
  },
  quantity: {
    color: "gray",
    fontSize: 13,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 6,
  },
  price: {
    marginRight: 7,
    fontSize: 15,
    color: "#007618",
    fontWeight: "600",
  },
  discount: {
    color: "gray",
    textDecorationLine: "line-through",
  },
  description: {
    marginTop: 10,
    lineHeight: 21,
    opacity: 0.7,
  },
  colorTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 13,
  },
  color: {
    flexDirection: "row",
    gap: 9,
    flexWrap: "wrap",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: 17,
  },
  btn: {
    width: (width * 2) / 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    borderWidth: 0.7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 7,
    backgroundColor: "white",
  },
  btnText: {
    fontWeight: "700",
  },
});
