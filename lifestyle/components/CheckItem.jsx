import { Dimensions, View, StyleSheet, TextInput } from "react-native";
import { useState, useEffect, useRef } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../constants/Colors";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useSharedValue, runOnJS } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

const CheckItem = ({ text, setCurrList, currList, index, i }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const hasReachedThreshold = useSharedValue(false);
  const windowWidth = Dimensions.get("window").width;
  const threshold = windowWidth / 3;
  const offsetX = useSharedValue(0);
  const startX = useSharedValue(0);

  const swipeableRef = useRef(null);
  const panRef = useRef();

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      if (offsetX.value < threshold) {
        if (hasReachedThreshold.value === false) {
          runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
          hasReachedThreshold.value = true;
        }
      } else {
        hasReachedThreshold.value = false;
      }
      offsetX.value = e.translationX + startX.value;
    })
    .withRef(panRef);

  const deleteItem = () => {
    var update = [...currList];
    update[i].items.splice(index, 1);
    setCurrList(update);
  };

  const deleteRow = (key) => {
    if (
      key === "Backspace" &&
      displayText === "" &&
      currList[i].items.length !== 1
    ) {
      deleteItem();
    }
  };

  const editItem = (input) => {
    if (input === "") {
      setIsChecked(false);
    }

    var update = currList;
    update[i].items[index].name = input;
    setDisplayText(input);
    setCurrList(update);
  };

  const checkItem = () => {
    var update = [...currList];

    update[i].completed = !isChecked;
    setCurrList(update);
    setIsChecked(!isChecked);
  };

  const newItem = () => {
    const newItem = {
      name: "",
      completed: false,
    };

    var update = [...currList];
    update[i].items.splice(index + 1, 0, newItem);
    setCurrList(update);
  };

  const rightSwipeDelete = () => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={24}
          color={Colors.dark.delete}
        />
      </View>
    );
  };

  const rightSwipeActions = () => {
    return currList[index] ? rightSwipeDelete() : <View />;
  };

  const swipeFromRightOpen = () => {
    deleteItem();
    swipeableRef.current?.close();
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <GestureDetector gesture={panGesture}>
      <Swipeable
        renderRightActions={rightSwipeActions}
        onSwipeableOpen={(direction) => {
          direction === "left" ? swipeFromLeftOpen() : swipeFromRightOpen();
        }}
        simultaneousHandlers={panRef}
        rightThreshold={25}
        ref={swipeableRef}
      >
        <View style={styles.listItemView}>
          <View>
            <BouncyCheckbox
              fillColor="#9342f5"
              onPress={checkItem}
              isChecked={isChecked}
            />
          </View>
          <TextInput
            style={[
              styles.text,
              { textDecorationLine: isChecked ? "line-through" : "none" },
              { outline: "none" },
            ]}
            value={displayText}
            onChangeText={(input) => {
              editItem(input);
            }}
            onSubmitEditing={newItem}
            selectionColor={Colors.dark.primary}
            onKeyPress={(event) => {
              deleteRow(event.nativeEvent.key);
            }}
          />
        </View>
      </Swipeable>
    </GestureDetector>
  );
};

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
  },
});
