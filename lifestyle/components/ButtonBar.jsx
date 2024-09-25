import { View, StyleSheet, Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const ButtonBar = () => {

return (
    <View style={styles.buttonView}>
            <Pressable
                onPress={() => {
                console.log("press");
                }}
                style={{paddingRight:10}}
            >
                <AntDesign name="pluscircleo" size={36} color="black" />
            </Pressable>
            <Pressable
                onPress={() => {
                console.log("press");
                }}
            >
                <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={42} color="black" />
            </Pressable>
    </View>
);
}

export default ButtonBar;

const styles = StyleSheet.create({
    buttonView: {
        height: 50,
        alignSelf: "stretch",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end"
      },
});