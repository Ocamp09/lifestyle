import { View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckItem = ({text}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [lineText, setLineText] = useState(text)

    const editItem = (input) => {
        setLineText(input)
        console.log(lineText)
    }
    
    return (
        <View style={styles.listItemView}>
          <View style={styles.listBoxView}>
            <BouncyCheckbox fillColor="#9342f5" onPress={() => {setIsChecked(!isChecked)}}/>
          </View>
          <TextInput
            style={{textDecorationLine: isChecked ? "line-through": "none"}}
            value={lineText}
            onChangeText={(input) => {editItem(input)}}
            // onChangeText={(text) => {editItem(item.name, i, index, text)}}
            // onSubmitEditing={() => {createNewItem(list.name, i)}}
          />
        </View>
      );
}

export default CheckItem;

const styles = StyleSheet.create({
    listItemView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 5
      },
    
      listBoxView: {
        width: "100"
      },

      text: {
      }
});
