import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";

const Header = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [isFlase, setIsFalse] = useState(true);
  return (
    <View
      style={{
        backgroundColor: colorScheme == "dark" ? "#1A1A1A" : "white",
      }}
      className="px-6 py-4 flex-row justify-between items-center"
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
      <View className='justify-center items-center'>
        <Pressable onPress={()=>{
            setIsFalse(prev=>!prev)
            toggleColorScheme()
        }}>
          {colorScheme=='light' ? (
            <MaterialIcons name="light-mode" size={hp(5)} color="black" />
          ) : (
            <MaterialIcons name="dark-mode" size={hp(5)} color="white" />
          )}
        </Pressable>
          <Text className="dark:text-white font-thin">{colorScheme=='dark'?"Dark Mode":"Light Mode"}</Text>
      </View>
    </View>
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
