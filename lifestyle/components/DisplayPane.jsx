import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import ButtonBar from "./ButtonBar";
import { Colors } from "../constants/Colors";
import List from "./List";
import HorizontalRule from "./styling/HotizontalRule";

const DisplayPane = ({ name }) => {
  const [toDoList, setToDoList] = useState([
    {
      name: "Today",
      items: [
        {
          name: "Make grocery list",
          completed: false,
        },
        {
          name: "Restock the fridge",
          completed: false,
        },
        {
          name: "Pay rent",
          completed: false,
        },
      ],
    },
    {
      name: "Cleaning",
      items: [
        {
          name: "Kitchen",
          completed: false,
        },
        {
          name: "Bathroom",
          completed: false,
        },
        {
          name: "Bedroom",
          completed: false,
        },
      ],
    },
  ]);

  return (
    <View style={styles.DisplayPane}>
      <View style={styles.DisplayPaneHeader}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <ButtonBar currList={toDoList} setCurrList={setToDoList} />
      </View>
      <View style={styles.DisplayPaneBody}>
        <FlatList
          scrollEnabled={false}
          data={toDoList}
          renderItem={({ item, index }) => {
            const isLast = toDoList.length - 1 === index;
            const i = index;
            return (
              <View>
                <List
                  list={toDoList}
                  setList={setToDoList}
                  i={i}
                  rename={false}
                />
                {!isLast && <HorizontalRule />}
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default DisplayPane;

const styles = StyleSheet.create({
  headerTextView: {
    height: 50,
  },

  headerText: {
    color: Colors.dark.primary,
    fontWeight: "bold",
    fontSize: 35,
  },

  DisplayPane: {
    alignSelf: "stretch",
    paddingBottom: 30,
  },

  DisplayPaneHeader: {
    alignSelf: "stretch",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "flex-start",
  },

  DisplayPaneBody: {
    backgroundColor: Colors.dark.tint,
    alignSelf: "stretch",
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
