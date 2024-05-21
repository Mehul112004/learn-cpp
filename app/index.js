import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import Card from "../components/Card";
import { hp } from "../helpers/common";

const index = () => {
  const { colorScheme } = useColorScheme();
  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colorScheme == "dark" ? "#1A1A1A" : "white",
      }}
    >
      <StatusBar style={`${colorScheme == "dark" ? "light" : "dark"}`} />
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: hp(2),
          gap: hp(3),
          paddingBottom: hp(10),
        }}
      >
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
        <Card title={"Introduction"} />
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
