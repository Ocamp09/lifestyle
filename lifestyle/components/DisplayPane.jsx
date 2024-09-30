import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import ButtonBar from "./ButtonBar";
import { Colors } from "../constants/Colors";
import OptionMenu from "./OptionMenu";
import ListItem from "./ListItem";

const DisplayPane = ({ name }) => {
  const [toDoList, setToDoList] = useState([
    {
      name: "List Name",
      items: [
        {
          name: "First item",
          completed: false,
        },
        {
          name: "Second item",
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
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.DisplayPane}>
      {showMenu && <OptionMenu />}
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
              <ListItem
                item={item}
                toDoList={toDoList}
                setToDoList={setToDoList}
                i={i}
                isLast={isLast}
                setShowMenu={setShowMenu}
              />
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
