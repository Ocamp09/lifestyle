import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";

const ListName = ({ name, list, setList, index, setMenuTrigger }) => {
  const [displayListName, setDisplayListName] = useState(name);

  const changeListName = (input) => {
    var update = [...list];
    update[index].name = input;
    setList(update);
    setDisplayListName(input);
  };

  return (
    <View>
      <Pressable
        onLongPress={() => {
          setMenuTrigger(true);
        }}
      >
        <Text style={styles.listNameText}>{displayListName}</Text>
      </Pressable>
    </View>
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
