import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";

const ListName = ({ name, setMenuTrigger, setMenuIndex, index }) => {
  const [displayListName, setDisplayListName] = useState(name);

  return (
    <View>
      <Pressable
        onLongPress={() => {
          setMenuTrigger(true);
          setMenuIndex(index);
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
