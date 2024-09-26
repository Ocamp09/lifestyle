import DisplayPane from "./components/DisplayPane";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Colors } from "./constants/Colors";
import CustomStatusBar from "./components/StatusBar";

export default function App() {
  return (
    <CustomStatusBar>
    <ScrollView style={styles.mainView} contentContainerStyle={{flex:1}}>
      <DisplayPane name="To-Do" type="checklist"/>
      {/* <DisplayPane name="Routines" /> */}
    </ScrollView>
    </CustomStatusBar>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 0,
    marginTop: 50,
    backgroundColor: Colors.dark.background,
    height: "auto"
  },

  statusBar: {
    backgroundColor: Colors.dark.background,
  },  
});

