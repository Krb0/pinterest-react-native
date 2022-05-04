import { StyleSheet, Image, ScrollView } from "react-native";
import Pin from "../components/Pin";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pin
        pin={{
          title: "notJustDev",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
        }}
      />
      <Pin
        pin={{
          title: "other Image",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/1.jpeg",
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
