import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import pins from "../assets/data/pins";

export default function PinScreen() {
  const pin = pins[0];
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={{
          uri: pin.image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{pin.title} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: "100%",
    height: 300,
  },
  title: {},
});
