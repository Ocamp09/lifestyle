import PopUp from "@components/PopUp";
import HorizontalRule from "@components/HotizontalRule";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.mainView}>
      {/* <PopUp /> */}
      <View style={styles.popUp}>
        <View style={styles.popUpHeader}>
          <Text style={styles.headerText}>Routines</Text>
        </View>
        <View style={styles.popUpBody}>
          <Text>List Name</Text>
          <Text>First item</Text>
          <HorizontalRule />
          <Text>List Name</Text>
          <Text>First item</Text>
        </View>
      </View>

      <View style={styles.popUp}>
        <View style={styles.popUpHeader}>
          <Text style={styles.headerText}>Streaks</Text>
        </View>
        <View style={styles.popUpBody}>
          <Text>List Name</Text>
          <Text>First item</Text>
          <HorizontalRule />
          <Text>List Name</Text>
          <Text>First item</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    marginTop: 50,
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
