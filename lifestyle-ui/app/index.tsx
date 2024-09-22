import HorizontalRule from "@components/hotizontalRule";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.popUp}>
        <View style={styles.popUpHeader}>
          <Text style={styles.headerText}>To-Do</Text>
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
  },

  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    backgroundColor: "pastelGrey",
  },

  popUp: {
    alignSelf: "stretch",
  },

  popUpHeader: {
    // backgroundColor: "lightblue",
    alignSelf: "stretch",
    paddingBottom: 5,
  },

  popUpBody: {
    // backgroundColor: "darkgrey",
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
