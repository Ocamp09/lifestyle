import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import HorizontalRule from "./HotizontalRule";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            style={{paddingRight:10}}
          >
                        <AntDesign name="pluscircleo" size={36} color="black" />

           </Pressable>
           <Pressable
            onPress={() => {
              console.log("press");
            }}
          >
                        <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={42} color="black" />

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
    height: 50,
  },

  headerText: {
    color: "black",
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
