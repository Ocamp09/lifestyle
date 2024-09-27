import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../constants/Colors";
import Swipeable from 'react-native-gesture-handler/Swipeable'


const CheckItem = ({ text, setCurrList, currList, index }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [displayText, setDisplayText] = useState(text);
    const [resetDelete, setResetDelete] = useState(false);

    const deleteItem = () => {
        var update = [...currList];
        update.splice(index, 1);
        setCurrList(update);
    }

    const editItem = (input) => {
        if (input === "") {
            if (displayText.length <= 1) {
                deleteItem();
            }

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

    const rightSwipeDelete = () => {
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
                  paddingHorizontal: 5,
                  fontWeight: '600',
                  padding: 20,
                }}
              >
                Del
              </Text>
            </View>
          )
    }

    const rightSwipeReset = () => {
        return (
            <View></View>
        )
    }


      const rightSwipeActions = () => {
        return resetDelete === true ? rightSwipeReset() : rightSwipeDelete();
      }
    
      const swipeFromRightOpen = () => {
        deleteItem();
        setResetDelete(true);
        rightSwipeActions();
      }

    useEffect(() => {
        setDisplayText(text);
    }, [text]);
    
    return (
        <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableOpen={(direction) => {
          direction === 'left' ? swipeFromLeftOpen() : swipeFromRightOpen()
        }}
        rightThreshold={30}
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
        paddingTop: 5,
      },

      text: {
        color: Colors.dark.text,
        fontSize: 16, 
        flex: 1,
        alignSelf: "stretch",
      }
});
