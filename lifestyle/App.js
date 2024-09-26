import PopUp from "./components/DisplayPane";
import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.mainView}>
      <DisplayPane name="To-Do" type="checklist"/>
      {/* <PopUp name="Routines" /> */}
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

