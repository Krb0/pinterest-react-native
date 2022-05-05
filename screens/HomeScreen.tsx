import { StyleSheet, Image, ScrollView, FlatList, View } from "react-native";

import { RootTabScreenProps } from "../types";
import pinsData from "../assets/data/pins";
import MasonryList from "../components/MasonryList";
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <MasonryList pins={pinsData} />
    </ScrollView>
  );
}
