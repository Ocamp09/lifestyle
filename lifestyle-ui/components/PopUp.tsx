import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalRule from "./HotizontalRule";

const [list, setList] = useState();

// setList(
//     {
//         list: [
//           {
//             name: "List Name",
//             items: [
//               {
//                 name: "First item",
//                 completed: false,
//               },
//             ],
//           },
//           {
//             name: "List Name",
//             items: [
//               {
//                 name: "First item",
//                 completed: false,
//               },
//             ],
//           },
//         ],
//       }
// )

const PopUp = () => {
  return (
    <View style={styles.popUp}>
      <View style={styles.popUpHeader}>
        <Text style={styles.headerText}>To-Do</Text>
      </View>
      <View style={styles.popUpBody}></View>
    </View>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  headerText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 35,
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
});
