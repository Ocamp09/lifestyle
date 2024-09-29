import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";

const HorizontalRule = () => {
  return <View style={styles.horizontalRule}></View>;
};

export default HorizontalRule;

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: Colors.dark.text,
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
