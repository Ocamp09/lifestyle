import PopUp from "./components/PopUp";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.mainView}>
      <PopUp name="To-Do" />
      <PopUp name="Routines" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    marginTop: 50,
    backgroundColor: "#fff",
  },
});
