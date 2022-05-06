import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pins from "../assets/data/pins";
import useRatio from "../hooks/useRatio";

export default function PinScreen() {
  const pin = pins[0];
  const ratio = useRatio(pin.image);
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Image
          source={{
            uri: pin.image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin.title} </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {},
});
