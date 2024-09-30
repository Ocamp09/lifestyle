import { StyleSheet, Pressable, View, Text } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import OptionMenu from "./OptionMenu";

const ListName = ({ index, list, setList }) => {
  const [menuTrigger, setMenuTrigger] = useState(false);

  return (
    <View>
      {menuTrigger && (
        <OptionMenu
          setMenuTrigger={setMenuTrigger}
          setList={setList}
          list={list}
          index={index}
        />
      )}

      <Pressable
        onLongPress={() => {
          setMenuTrigger(true);
        }}
      >
        <Text style={styles.listNameText}>{list[index].name}</Text>
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
