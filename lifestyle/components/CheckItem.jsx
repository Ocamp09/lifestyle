import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../constants/Colors";
import Swipeable from 'react-native-gesture-handler/Swipeable'


const CheckItem = ({ text, setCurrList, currList, index }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [displayText, setDisplayText] = useState(text);

    const deleteItem = () => {
        var update = [...currList];
        update.splice(index, 1);
        setCurrList(update);
    }

    const editItem = (input) => {
        console.log("in", input)
        if (input === "") {
            console.log("display", displayText)
            if (displayText.length <= 1) {
                deleteItem();
            }

            console.log("empty")
            console.log(isChecked)
            setIsChecked(false);

            return
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


      const rightSwipeActions = () => {
        return (
          <View
            style={{
              backgroundColor: '#dd2150',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text
              style={{
                color: '#fff',
                paddingHorizontal: 10,
                fontWeight: '600',
                padding: 30,
              }}
            >
              Delete
            </Text>
          </View>
        )
      }
    
      const swipeFromRightOpen = () => {
        Alert.alert('Swipe from right')
      }

    useEffect(() => {
        setDisplayText(text);
    }, [text]);
    
    return (
        <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableOpen={(direction) => {
          console.log(direction) // "left" | "right"
          direction === 'left' ? swipeFromLeftOpen() : swipeFromRightOpen()
        }}
      >
            <View style={styles.listItemView}>
                <View style={styles.listBoxView}>
                    <BouncyCheckbox fillColor="#9342f5" onPress={checkItem} isChecked={isChecked}/>
                </View>
                <TextInput
                    style={[styles.text, {textDecorationLine: isChecked ? "line-through": "none"}]}
                    value={displayText}
                    onChangeText={(input) => {editItem(input)}}
                    onSubmitEditing={newItem}
                    selectionColor={Colors.dark.primary}
                />
            </View>
        </Swipeable>
      );
}

export default CheckItem;

const styles = StyleSheet.create({
    listItemView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingBottom: 5,
      },
    
      listBoxView: {
        width: "100",
      },

      text: {
        color: Colors.dark.text,
        fontSize: 16, 
        flex: 1,
        alignSelf: "stretch",
      }
});
