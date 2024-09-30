import { View, StyleSheet, Text, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import HorizontalRule from "./styling/HotizontalRule";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const OptionMenu = () => {
  return (
    <View style={styles.blurWindow}>
      <View style={styles.preview}>
        {/* <Text style={styles.text}>Name here</Text> */}
      </View>
      <View style={styles.menu}>
        {/* <Button title={"pin"} style={styles.text}>
          Pin
        </Button> */}
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? Colors.dark.select : Colors.dark.tint,
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
        <HorizontalRule noPadding={true} />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? Colors.dark.select : Colors.dark.tint,
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
    </View>
  );
};

export default OptionMenu;

const styles = StyleSheet.create({
  blurWindow: {
    position: "absolute",
    width: "100%",
    position: "relative",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(21, 23, 24, 0.95)",
    zIndex: 100,
    alignContent: "center",
  },

  text: {
    color: "white",
    fontSize: 18,
  },

  preview: {
    width: "100%",
    height: 400,
    backgroundColor: Colors.dark.tint,
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 10,
    display: "none",
  },

  menu: {
    marginTop: 15,
    backgroundColor: Colors.dark.tint,
    borderRadius: 10,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    height: 125,
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
