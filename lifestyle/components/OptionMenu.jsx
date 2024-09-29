import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../constants/Colors";
import HorizontalRule from "./styling/HotizontalRule";

const OptionMenu = () => {
  return (
    <View style={styles.blurWindow}>
      <View style={styles.preview}>
        <Text style={styles.text}>Name here</Text>
      </View>
      <View style={styles.menu}>
        <Text style={styles.text}>Lower view</Text>
        <HorizontalRule />
        <Text style={styles.text}>Lower view</Text>
        <HorizontalRule />
        <Text style={styles.text}>Lower view</Text>
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
  },

  menu: {
    marginTop: 15,
    backgroundColor: Colors.dark.tint,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 10,
    borderRadius: 10,
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
