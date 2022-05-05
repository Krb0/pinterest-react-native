import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import IPins from "../../../models/pins.schema";
import useRatio from "../../../hooks/useRatio";

const Pin = ({ pin }: { pin: IPins }) => {
  const ratio = useRatio(pin.image);
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
      <TouchableOpacity>
        <Text style={styles.title} numberOfLines={2}>
          {pin.title}
        </Text>
      </TouchableOpacity>
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
    width: "100%",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    aspectRatio: 1 / 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 8,
    lineHeight: 22,
    color: "#202020",
  },
});

export default Pin;
