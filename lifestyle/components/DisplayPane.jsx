import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import ButtonBar from "./ButtonBar";
import CheckItem from "./CheckItem";
import { Colors } from "../constants/Colors";

// [
//   {
//     name: "List Name",
//     items: [
//       {
//         name: "First item",
//         completed: false,
//       },
//       {
//         name: "Second item",
//         completed: false,
//       },
//     ],
//   },
//   {
//     name: "List Name 2",
//     items: [
//       {
//         name: "First item 2",
//         completed: false,
//       },
//     ],
//   },
// ]


const DisplayPane = ({ name, type }) => {
  const [toDoList, setToDoList] = useState(
       [ 
        {
          name: "First item",
          completed: false,
        },
        {
          name: "Second item",
          completed: false,
        },
      ]
  );

  return (
    <View style={styles.DisplayPane}>
      <View style={styles.DisplayPaneHeader}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        <ButtonBar currList={toDoList} setCurrList={setToDoList}/>
      </View>
      {/* End of header view */}
      {/* Start of body view */}
      <View style={styles.DisplayPaneBody}>
        {/* {toDoList.map((list, i) => {
          const isLast = toDoList.length - 1 === i;
          return (
            <View key={i}>
              <Text key={"1" + i}>{list.name}</Text>
              <View > */}

              <FlatList
                // data={list.items}
                scrollEnabled={false}
                data={toDoList}
                renderItem={({ item, index }) => {
                  return (
                  <CheckItem 
                    text={item.name} 
                    setCurrList={setToDoList} 
                    currList={toDoList} 
                    index={index}
                  />
                  )
                }}
              />
              {/* {!isLast && <HorizontalRule />}
              </View>
            </View>
          );
        })} */}
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
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 35,
  },

  buttonView: {
    height: 50,
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
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
    width: "100"
  },

  checkBoxColor: {
    borderColor: "black"
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
