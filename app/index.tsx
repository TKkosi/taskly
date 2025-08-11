import { ShoppingListItem } from "@/components/ShoppingListItem";
import { StyleSheet, FlatList , TextInput , View , Text } from "react-native";
import { theme } from "@/theme";
import { useState } from "react";

type ShoppingListItemProps = {
  id:string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedAtTimestamp: number;
};


export default function App() {
  const [shoppingList , setShoppingList] = useState<ShoppingListItemProps[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toTimeString() , name: value , lastUpdatedAtTimestamp: Date.now() },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      setValue(""); 
    }
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp ? undefined : Date.now(),
        };
      } else {
        return item;
      }
    });
    setShoppingList(newShoppingList);
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter(item => item.id !== id);
    setShoppingList(newShoppingList);
  };

  return (
    <FlatList 
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]} 
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty</Text>
        </View>
    }  
    ListHeaderComponent={
      <TextInput 
      placeholder="Add item" 
      style={styles.textInput} 
      value={value} 
      onChangeText={setValue} 
      returnKeyType="done" 
      onSubmitEditing={handleSubmit}
      />}  
      renderItem={({ item }) => (<ShoppingListItem name={item.name} onDelete={() => handleDelete(item.id)} onToggleComplete={() => handleToggleComplete(item.id)} isCompleted={Boolean(item.completedAtTimestamp)} />)}
      ></FlatList>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  contentContainer: {
    paddingBottom:24,
  },
  textInput: {
    borderColor: theme.colorCerulean,
    borderWidth: 2,
    padding: 10,
    fontSize: 18,
    borderRadius:50,
    marginHorizontal:12,
    marginBottom: 12,
    backgroundColor: theme.colorWhite
  },
  listEmptyContainer: {
    marginVertical: 18,
    justifyContent: "center",
    alignItems: "center",
  },
});