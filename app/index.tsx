import { ShoppingListItem } from "@/components/ShoppingListItem";
import { StyleSheet, FlatList , TextInput , View , Text } from "react-native";
import { theme } from "@/theme";
import { useState } from "react";

type ShoppingListItemProps = {
  id:string;
  name: string;
};

const initialList: ShoppingListItemProps[] = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Tea" },
  { id: "3", name: "Milk" },
];

export default function App() {
  const [shoppingList] = useState(initialList);
  const [value, setValue] = useState<string>();

  const handleSubmit = () => {
    // Add your submit logic here, e.g., add item to shoppingList
    setValue(""); // Clear input after submit
  };

  return (
    <FlatList ListHeaderComponent={<TextInput placeholder="Add item" value={value} onChangeText={setValue} style={styles.textInput} returnKeyType="done" onSubmitEditing={handleSubmit}/>}  data={shoppingList} renderItem={({ item }) => <ShoppingListItem key={item.id} name={item.name} isCompleted={false} />} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 12,
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
  contentContainer: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    paddingBottom:24,
  },
});