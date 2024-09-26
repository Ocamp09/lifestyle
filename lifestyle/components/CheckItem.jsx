import { View, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckItem = ({text, setCurrList, currList, index}) => {
    const [isChecked, setIsChecked] = useState(false);

    const editItem = (input) => {
        var update = currList;
        update[index].name = input;
        setCurrList(update);
    }

    const checkItem = () => {
        var update = currList;

        update[index].completed = !isChecked;
        setCurrList(update);
        setIsChecked(!isChecked);
    }

    const newItem = () => {
        var newItem = {
            name: "",
        completed: false,
        }

        var update = currList;
        update.splice(index + 1, 0, newItem);
        console.log("update", update)
        setCurrList(update);
        console.log("added: ", currList)
    }
    
    return (
        <View style={styles.listItemView}>
          <View style={styles.listBoxView}>
            <BouncyCheckbox fillColor="#9342f5" onPress={checkItem}/>
          </View>
          <TextInput
            style={{textDecorationLine: isChecked ? "line-through": "none"}}
            defaultValue={text}
            onChangeText={(input) => {editItem(input)}}
            onSubmitEditing={newItem}
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
