import { View, StyleSheet, TextInput } from "react-native";
import { useState, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CheckItem = ({text, setCurrList, currList, index}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [displayText, setDisplayText] = useState(text);

    const editItem = (input) => {
        if (input === "") {
            console.log("empty")
            console.log(isChecked)
            setIsChecked(false);
        }
        var update = currList;
        update[index].name = input;
        setDisplayText(input);
        setCurrList(update);
    }

    const checkItem = () => {
        var update = currList;

        update[index].completed = !isChecked;
        setCurrList(update);
        setIsChecked(!isChecked);
    }

    const newItem = () => {
        const newItem = {
            name: "",
            completed: false,
        };

        var update = [...currList];
        update.splice(index + 1, 0, newItem);
        setCurrList(update);
    }

    useEffect(() => {
        setDisplayText(text); // Update displayText if text prop changes
    }, [text]);
    
    return (
        <View style={styles.listItemView}>
          <View style={styles.listBoxView}>
            <BouncyCheckbox fillColor="#9342f5" onPress={checkItem} isChecked={isChecked}/>
          </View>
          <TextInput
            style={{textDecorationLine: isChecked ? "line-through": "none"}}
            value={displayText}
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
