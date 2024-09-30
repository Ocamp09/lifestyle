import { View, FlatList } from "react-native";
import CheckItem from "./CheckItem";
import HorizontalRule from "./styling/HotizontalRule";
import ListName from "./ListName";

const List = ({
  item,
  toDoList,
  setToDoList,
  i,
  isLast,
  setShowMenu,
  setMenuIndex,
}) => {
  return (
    <View key={i}>
      <ListName
        name={item.name}
        setMenuTrigger={setShowMenu}
        setMenuIndex={setMenuIndex}
        index={i}
      />
      <View>
        <FlatList
          scrollEnabled={false}
          data={item.items}
          renderItem={({ item, index }) => {
            return (
              <CheckItem
                key={index}
                text={item.name}
                setCurrList={setToDoList}
                currList={toDoList}
                index={index}
                i={i}
              />
            );
          }}
        />
        {!isLast && <HorizontalRule />}
      </View>
    </View>
  );
};

export default List;
