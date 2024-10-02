import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Modal,
  Platform,
} from "react-native";
import { Colors } from "../constants/Colors";
import HorizontalRule from "./styling/HotizontalRule";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import List from "./List";
import { useState, useRef } from "react";

const OptionMenu = ({ index, list, setList, setMenuTrigger }) => {
  const [rename, setRename] = useState(false);
  const [previewDimensions, setPreviewDimensions] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const previewRef = useRef(null);

  const handleLayout = (event) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPreviewDimensions({ x, y, width, height });
  };

  const tapOutside = (event) => {
    const { x, y, width, height } = previewDimensions;

    if (Platform.OS === "ios") {
      const { locationX, locationY } = event.nativeEvent;

      if (
        locationX < x ||
        locationX > x + width ||
        locationY < y ||
        locationY > y + height
      ) {
        setMenuTrigger(false);
      }
    } else {
      const { clientX, clientY } = event.nativeEvent;
      if (
        clientX < x ||
        clientX > x + width ||
        clientY < y ||
        clientY > y + height
      ) {
        setMenuTrigger(false);
      }
    }
  };

  const deleteList = () => {
    var update = [...list];
    update.splice(index, 1);
    setList(update);
    setMenuTrigger(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <Pressable
        onPress={(event) => {
          tapOutside(event);
        }}
        style={styles.blurWindow}
      >
        <View style={styles.preview} ref={previewRef} onLayout={handleLayout}>
          <List i={index} list={list} setList={setList} rename={true} />
        </View>
        <View style={styles.menu}>
          {/* <Button title={"pin"} style={styles.text}>
          Pin
        </Button> */}
          {/* <Pressable
            onPress={handleFocus}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Colors.dark.select
                  : Colors.dark.tint,
              },
              styles.menuItem,
            ]}
          >
            <Text style={styles.text}>Rename</Text>
            <MaterialCommunityIcons
              name="rename-box"
              size={24}
              color={Colors.dark.text}
            />
          </Pressable>
          <HorizontalRule noPadding={true} /> */}
          <Pressable
            onPress={() => {
              deleteList();
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? Colors.dark.select
                  : Colors.dark.tint,
              },
              styles.menuItem,
            ]}
          >
            <Text style={[styles.text, { color: Colors.dark.delete }]}>
              Delete
            </Text>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={24}
              color={Colors.dark.delete}
            />
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default OptionMenu;

const styles = StyleSheet.create({
  blurWindow: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },

  text: {
    color: "white",
    fontSize: 18,
  },

  preview: {
    width: "87%",
    height: 300,
    backgroundColor: Colors.dark.tint,
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 10,
    marginTop: 140,
  },

  menu: {
    marginTop: 15,
    backgroundColor: Colors.dark.tint,
    borderRadius: 10,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    // height: 100,
    height: 60,
  },

  menuItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
});
