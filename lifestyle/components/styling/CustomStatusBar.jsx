import React, { Fragment } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Colors } from "../../constants/Colors";

export default function CustomStatusBar({
  children,
  statusBgColor = "red",
  bgColor = Colors.dark.background,
}) {
  return (
    <Fragment>
      <StatusBar backgroundColor={statusBgColor} />
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        {children}
      </SafeAreaView>
    </Fragment>
  );
}
