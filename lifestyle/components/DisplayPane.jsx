import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { useState } from "react";
import ButtonBar from "./ButtonBar";
import { Colors } from "../constants/Colors";
import HorizontalRule from "./HotizontalRule";
import CheckItem from "./CheckItem";
import ListName from "./ListName";
import OptionMenu from "./OptionMenu";

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
      {/* End of header view */}
      {/* Start of body view */}
      <View style={styles.DisplayPaneBody}>
        <FlatList
          scrollEnabled={false}
          data={toDoList}
          renderItem={({ item, index }) => {
            const isLast = toDoList.length - 1 === index;
            const i = index;
            return (
              <View key={index}>
                <ListName
                  name={item.name}
                  list={toDoList}
                  setList={setToDoList}
                  index={index}
                  setMenuTrigger={setShowMenu}
                />
                <View>
                  <FlatList
                    scrollEnabled={false}
                    data={item.items}
                    renderItem={({ item, index }) => {
                      return (
                        <CheckItem
                          key={index}
                          text={item.name}
                          setCurrList={setToDoList}
                          currList={toDoList}
                          index={index}
                          i={i}
                        />
                      );
                    }}
                  />
                  {!isLast && <HorizontalRule />}
                </View>
              </View>
            );
          }}
        />
        {/* })}      */}
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

  buttonView: {
    height: 50,
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  listItemView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 5,
  },

  listTextView: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },

  listBoxView: {
    width: "100",
  },

  listNameText: {
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 25,
  },

  checkBoxColor: {
    borderColor: "black",
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
