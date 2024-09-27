import { View, StyleSheet, Pressable } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../constants/Colors";


const ButtonBar = ({currList, setCurrList}) => {

    const appendNewItem = () => {
        const newItem = {
          name: "List",
          items: [
            { 
                name: "",
                completed: false,
            },
          ]
        }
        
        console.log("curr", currList)
        var update = [...currList];
        update.push(newItem);
        console.log(update);

        setCurrList(update)
    }

return (
    <View style={styles.buttonView}>
            <Pressable
                onPress={appendNewItem}
                style={{paddingRight:10}}
            >
                <AntDesign name="pluscircle" size={36} color="#9342f5" />
            </Pressable>
            {/* <Pressable
                onPress={() => {
                console.log("press");
                }}
            >
                <MaterialCommunityIcons name="dots-horizontal-circle-outline" size={42} color="black" />
            </Pressable> */}
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