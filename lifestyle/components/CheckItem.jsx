import { View, StyleSheet, TextInput, Text, Alert } from "react-native";
import { useState, useEffect, useRef } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../constants/Colors";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckItem = ({ text, setCurrList, currList, index }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [displayText, setDisplayText] = useState(text);

    const swipeableRef = useRef(null);

    const deleteItem = () => {
        var update = [...currList];
        update.splice(index, 1);
        setCurrList(update);
    }

    const deleteRow = (key) => {
        if (key === "Backspace" && displayText === "") {
            deleteItem()
        }
    }

    const editItem = (input) => {
        if (input === "") {
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

    const rightSwipeDelete = () => {
        return (
            <View
              style={{
                // backgroundColor: '#dd2150',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
                <MaterialCommunityIcons name="trash-can-outline" size={24} color="#dd2150" />
            
            </View>
          )
    }

    const rightSwipeActions = () => {
        return currList[index] ? rightSwipeDelete() : <View />;
      };
    
      const swipeFromRightOpen = () => {
        deleteItem();
        swipeableRef.current?.close();
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
        rightThreshold={25}
        ref={swipeableRef}
      >
            <View style={styles.listItemView}>
                <View style={styles.listBoxView}>
                    <BouncyCheckbox fillColor="#9342f5" onPress={checkItem} isChecked={isChecked}/>
                </View>
                <TextInput
                    style={[styles.text, {textDecorationLine: isChecked ? "line-through": "none"}, { outline: "none" }]}
                    value={displayText}
                    onChangeText={(input) => {editItem(input)}}
                    onSubmitEditing={newItem}
                    selectionColor={Colors.dark.primary}
                    onKeyPress={(event) => {deleteRow(event.nativeEvent.key)}}
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
