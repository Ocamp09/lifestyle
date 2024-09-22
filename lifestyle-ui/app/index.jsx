import PopUp from "@components/PopUp";
import HorizontalRule from "@components/HotizontalRule";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.mainView}>
      <PopUp name="To-Do" />
      <PopUp name="Routines" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    marginTop: 50,
    backgroundColor: "#fff",
  },

  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "pastelGrey",
  },

  popUp: {
    alignSelf: "stretch",
    paddingBottom: 30,
  },

  popUpHeader: {
    alignSelf: "stretch",
    paddingBottom: 5,
  },

  popUpBody: {
    backgroundColor: "lightgrey",
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },

  listItem: {
    alignSelf: "stretch",
  },
});

export default Index;
