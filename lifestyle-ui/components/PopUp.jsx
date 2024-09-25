import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import HorizontalRule from "./HotizontalRule";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import { PlusCircleOutlined } from "@ant-design/icons";

const PopUp = ({ name }) => {
  const [toDoList, setToDoList] = useState([
    {
      name: "List Name",
      items: [
        {
          name: "First item",
          completed: false,
        },
      ],
    },
    {
      name: "List Name 2",
      items: [
        {
          name: "First item 2",
          completed: false,
        },
      ],
    },
  ]);

  return (
    <View style={styles.popUp}>
      <View style={styles.popUpHeader}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <View style={styles.buttonView}>
          <Pressable
            onPress={() => {
              console.log("press");
            }}
          >
            <PlusCircleOutlined size={"30em"} />
          </Pressable>
        </View>
      </View>
      <ScrollView style={styles.popUpBody}>
        {toDoList.map((list, i) => {
          const isLast = toDoList.length - 1 === i;

          return (
            <View key={i}>
              <Text key={"1" + i}>{list.name}</Text>
              <Text key={"2" + i}>{list.items[0].name}</Text>
              {!isLast && <HorizontalRule />}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  headerTextView: {
    backgroundColor: "lightgreen",
  },

  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 35,
  },

  buttonView: {
    backgroundColor: "lightblue",
    height: 35,
    alignSelf: "stretch",
  },

  button: {
    backgroundColor: Colors.light.background,
    size: 35,
  },

  icon: {
    color: "black",
  },

  popUp: {
    alignSelf: "stretch",
    paddingBottom: 30,
  },

  popUpHeader: {
    alignSelf: "stretch",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "flex-start",
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
});
