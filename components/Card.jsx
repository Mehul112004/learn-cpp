import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helpers/common";
import { Image } from "expo-image";
import { theme } from "../constants/theme";

const Card = ({ title }) => {
  return (
    <View
      className="rounded-2xl flex-col justify-center items-center"
      style={{
        height: hp(15),
        width: wp(42),
        borderColor: theme.colors.grayBG,
        borderWidth: 0.5,
      }}
    >
      <Pressable onPress={() => console.log("clicked")}>
        <Image
          style={{
            width: wp(15),
            height: hp(10),
          }}
          source={require("../assets/images/introduction.png")}
          //   source={imageURI.toString()}
          contentFit="cover"
        />
        <Text className="dark:text-white">{title}</Text>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
