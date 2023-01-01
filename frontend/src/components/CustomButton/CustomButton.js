import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 52,

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 10,
  },

  container_PRIMARY: {
    backgroundColor: "#FBBC05",
    elevation: 7,
  },

  container_SECONDARY: {
    borderColor: "#FBBC05",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },

  text_SECONDARY: {
    color: "#FBBC05",
  },

  text_TERTIARY: {
    color: "#FBBC05",
    marginLeft: "35%",
  },
  text_FOURTH: {
    color: "#FBBC05",
  },
  text_FORGOT: {
    alignSelf: "flex-end",
    color: "#000000",
  },
});

export default CustomButton;
