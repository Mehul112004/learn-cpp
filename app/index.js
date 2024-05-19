import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";

const index = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView
      className={`flex-1 justify-center items-center`}
      style={{
        backgroundColor:
          colorScheme == "dark" ? "#1A1A1A" : "white",
        flex: 1,
      }}
    >
      <Text className={`text-center dark:text-white`}>index</Text>
      <Pressable
        onPress={toggleColorScheme}
        className="mt-4 p-2 bg-blue-500 rounded"
      >
        <Text className="text-white">Toggle Mode</Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("idk")}
        className="mt-4 p-2 bg-blue-500 rounded"
      >
        <Text className="text-white">Go to next page</Text>
      </Pressable>
      <StatusBar style={`${colorScheme == "dark" ? "light" : "dark"}`} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
