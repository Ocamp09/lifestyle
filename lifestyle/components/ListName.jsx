import { TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";

const ListName = ({ name, list, setList, index }) => {
  const [displayListName, setDisplayListName] = useState(name);

  const changeListName = (input) => {
    var update = [...list];
    update[index].name = input;
    setList(update);
    setDisplayListName(input);
  };

  return (
    <TextInput
      key={"1" + index}
      style={[styles.listNameText, { outline: "none" }]}
      value={displayListName}
      onChangeText={(input) => {
        changeListName(input);
      }}
    />
  );
};

export default ListName;

const styles = StyleSheet.create({
  listNameText: {
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 25,
  },
});
