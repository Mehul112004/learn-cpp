import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs, usePathname } from "expo-router";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const _layout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <>
    
    <StatusBar style={`${colorScheme == "dark" ? "light" : "dark"}`} />
      <Header />
      {/* <SafeAreaView className={`flex-1`}> */}
      <Tabs
        screenOptions={{
          tabBarStyle: {
            flex: 1,
            bottom: 10,
            position: "absolute",
            borderRadius: theme.radius.full,
            width: wp(85),
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 5,
            height: hp(8),
            marginLeft: (wp(100) - wp(85)) / 2,
            backgroundColor:
              colorScheme == "dark" ? "#2F2F2F" : theme.colors.grayBG,
            borderColor: "transparent",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Learn",
            tabBarIcon: ({ color }) => (
              <FontAwesome6
                name="graduation-cap"
                size={24}
                color={`${color}`}
              />
            ),
            tabBarItemStyle: {
              borderRightColor: theme.colors.white,
              borderRightWidth: 0.5,
              // backgroundColor:'red',
              flex: 1,
              height: hp(8),
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 4,
            },
          }}
        />
        <Tabs.Screen
          name="idk"
          options={{
            title: "Practice",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="lightbulb" size={24} color={`${color}`} />
            ),
            tabBarItemStyle: {
              flex: 1,
              height: hp(8),
              alignItems: "center",
              justifyContent: "center",
              paddingVertical: 4,
            },
          }}
        />
      </Tabs>
      {/* </SafeAreaView> */}
    </>
  );
};

export default _layout;
