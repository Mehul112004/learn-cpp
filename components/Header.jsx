import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../helpers/common";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../constants/theme";
import { StatusBar } from "expo-status-bar";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isFlase, setIsFalse] = useState(true);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colorScheme == "dark" ? "#1A1A1A" : "white",

        borderBottomColor:
          colorScheme == "dark" ? theme.colors.white : theme.colors.grayBG,
        borderBottomWidth: 0.5,

        elevation: 20,
        shadowColor: colorScheme == "dark" ? "#E5DFDF" : "#171717",
      }}
      className="px-5 py-1 flex-row justify-between items-center"
    >
      <StatusBar style={`${colorScheme == "dark" ? "light" : "dark"}`} />
      <Image
        style={{
          width: wp(15),
          height: hp(10),
        }}
        source={require("../assets/images/logo.png")}
        contentFit="cover"
      />
      <View className="justify-center items-center">
        <Pressable
          onPress={() => {
            setIsFalse((prev) => !prev);
            toggleColorScheme();
          }}
        >
          {colorScheme == "light" ? (
            <MaterialIcons name="light-mode" size={hp(5)} color="black" />
          ) : (
            <MaterialIcons name="dark-mode" size={hp(5)} color="white" />
          )}
        </Pressable>
        <Text className="dark:text-white font-thin">
          {colorScheme == "dark" ? "Dark Mode" : "Light Mode"}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 100,
    // height:200,
    // backgroundColor: "#0553",
  },
});
