import { View, StyleSheet } from "react-native";

const Blur = () => {
  return <View style={styles.popupScreen} />;
};

export default Blur;

const styles = StyleSheet.create({
  blurView: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
    backgroundColor: "rgba(21, 23, 24, 0.75)",
  },
});
