import { StyleSheet, View } from "react-native";
import IPins from "../../models/pins.schema";
import Pin from "./Pin";

const MasonryList = ({ pins }: { pins: IPins[] }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {pins
          .filter((item, index) => index % 2 === 0)
          .map((pin) => (
            <Pin pin={pin} />
          ))}
      </View>
      <View style={{ flex: 1 }}>
        {pins
          .filter((item, index) => index % 2 === 1)
          .map((pin) => (
            <Pin pin={pin} />
          ))}
      </View>
    </View>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
