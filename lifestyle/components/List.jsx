import { View, FlatList } from "react-native";
import CheckItem from "./CheckItem";
import ListName from "./ListName";

const List = ({ list, setList, i, rename }) => {
  return (
    <View key={i}>
      <ListName index={i} list={list} setList={setList} rename={rename} />
      <View>
        <FlatList
          scrollEnabled={false}
          data={list[i].items}
          renderItem={({ item, index }) => {
            return (
              <CheckItem
                key={index}
                text={item.name}
                setCurrList={setList}
                currList={list}
                index={index}
                i={i}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default List;
