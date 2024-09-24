import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FlashList } from "@shopify/flash-list";
import { categories, products } from "@/data";
import { useRoute, useScrollToTop } from "@react-navigation/native";

import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import Title from "@/components/shop/Title";
import Cart from "@/components/shop/Cart";
import Category from "@/components/shop/Category";
import Product from "@/components/shop/Product";
import { setProduct } from "@/providers/redux/productSlice";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const { height } = Dimensions.get("window");  
  const navigation = useNavigation();

  const [select, setSelect] = useState("Men");
  //api ka data pl tone mr mo
  const [data, setData] = useState(products);
  const [search, setSearch] = useState("");

  const route = useRouter();
  const dispatch = useAppDispatch();
  const scrollRef = useRef<ScrollView>(null);
  
  useScrollToTop(scrollRef);
  const onSelectHandler = (name: string) => {
    setSelect(name);
  };

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  //scroll To top
  const onScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const saveProductToRedux = (item: any) => {
    dispatch(setProduct(item));
    route.navigate("/detail");
  };

  return (
    <SafeAreaView style={{ minHeight: height, backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <Pressable onPress={onScrollToTop}>
          <Image
            style={styles.image}
            source={require("@/assets/images/shop/n.png")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
        </Pressable>

        <Pressable onPress={() => route.navigate("/cart")}>
          <Cart />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollRef}>
        <Image
          style={styles.banner}
          source={require("@/assets/images/shop/banner.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <View style={{ marginLeft: 20 }}>
          <Title title="Show By Category" action="See All" />
          <FlashList
            data={categories}
            extraData={select}
            horizontal
            renderItem={({ item }) => (
              <Category {...item} onSelect={onSelectHandler} select={select} />
            )}
            estimatedItemSize={55}
            showsHorizontalScrollIndicator={false}
          />
          <Text>{""}</Text>
          <Title title="Recommend For you" action="See All" />
          <FlashList
            data={data[select as keyof typeof data]}
            horizontal
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item)} />
            )}
            estimatedItemSize={55}
            showsHorizontalScrollIndicator={false}
          />
          <Title title="Popular List For you" action="See All" />
          <FlashList
            data={data[select as keyof typeof data]}
            horizontal
            renderItem={({ item }) => (
              <Product {...item} onCall={() => saveProductToRedux(item)} />
            )}
            estimatedItemSize={55}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
    marginBottom: 10,
  },

  image: {
    width: 50,
    height: 25,
    marginLeft: 15,
  },
  banner: {
    width: "100%",
    height: 200,
    marginTop: 13,
  },
  searchBarContainer: {
    backgroundColor: "#3D6DCC",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    width: "100%",
  },
  inputContainer: {
    backgroundColor: "#fff",
  },
});
