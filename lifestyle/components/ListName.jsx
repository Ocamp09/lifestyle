import { StyleSheet, Pressable, View, Text, TextInput } from "react-native";
import { useState, useRef } from "react";
import { Colors } from "../constants/Colors";
import OptionMenu from "./OptionMenu";

const ListName = ({ index, list, setList, rename }) => {
  const [menuTrigger, setMenuTrigger] = useState(false);
  const nameRef = useRef(null);

  const changeListName = (input) => {
    var update = [...list];
    update[index].name = input;
    setList(update);
  };

  const openMenu = () => {
    setMenuTrigger(true);
  };

  return (
    <View>
      {menuTrigger && (
        <OptionMenu
          setMenuTrigger={setMenuTrigger}
          setList={setList}
          list={list}
          index={index}
          nameRef={nameRef}
        />
      )}
      {rename && (
        <TextInput
          value={list[index].name}
          onChangeText={(input) => {
            changeListName(input);
          }}
          selectionColor={Colors.dark.primary}
          style={[styles.listNameText, { outline: "none" }]}
          ref={nameRef}
          autoFocus={true}
        />
      )}
      {!rename && (
        <Pressable onLongPress={openMenu}>
          <Text style={styles.listNameText}>{list[index].name}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default ListName;

const styles = StyleSheet.create({
  listNameText: {
    color: Colors.dark.text,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "stretch",
  },
});
