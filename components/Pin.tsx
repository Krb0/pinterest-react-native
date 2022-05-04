import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pin = ({ pin }: { pin: { title: string; image: string } }) => {
  const [ratio, setRatio] = useState(1);
  return (
    <View style={styles.pin}>
      <View>
        <Image
          style={[styles.image, { aspectRatio: ratio }]}
          source={{
            uri: pin.image,
          }}
        />
        <TouchableOpacity style={styles.heart}>
          <AntDesign name="hearto" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{pin.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heart: {
    position: "absolute",
    bottom: 8,
    right: 10,
    backgroundColor: "#D3CFD4",
    padding: 4,
    borderRadius: 100,
  },
  pin: {
    height: 500,
    width: "100%",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 25,
    aspectRatio: 1 / 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
  },
});

export default Pin;
