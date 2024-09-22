import { StyleSheet, View } from "react-native";

const HorizontalRule = () => {
  return <View style={styles.horizontalRule}></View>;
};

export default HorizontalRule;

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
