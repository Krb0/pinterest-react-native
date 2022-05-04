import { StyleSheet, View } from "react-native";
import IPins from "../../models/pins.schema";
import Pin from "./Pin";

const MasonryList = ({ pins }: { pins: IPins[] }) => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {pins
          .filter((_, index) => index % 2 === 0)
          .map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
      <View style={styles.column}>
        {pins
          .filter((_, index) => index % 2 === 1)
          .map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
    </View>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    padding: 5,
    flex: 1,
  },
});
