import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

const idk = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      className=""
      style={{
        backgroundColor: colorScheme == "dark" ? "#1A1A1A" : "white",
        flex: 1,
      }}
    >
      <StatusBar style={`${colorScheme == "dark" ? "light" : "dark"}`} />
      <Text>idk</Text>
    </View>
  );
};

export default idk;

const styles = StyleSheet.create({});
