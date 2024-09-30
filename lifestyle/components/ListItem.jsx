import { View, FlatList } from "react-native";
import CheckItem from "./CheckItem";
import HorizontalRule from "./styling/HotizontalRule";
import ListName from "./ListName";

const ListItem = ({ item, toDoList, setToDoList, i, isLast, setShowMenu }) => {
  return (
    <View key={i}>
      <ListName name={item.name} setMenuTrigger={setShowMenu} />
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

export default ListItem;
