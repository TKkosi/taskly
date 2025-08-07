import { theme } from "@/theme";
import { StyleSheet, Text, View , TouchableOpacity , Alert} from "react-native";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this ?",
      "It will be gone for good ",
      [
        {
          text :"Yes",
          onPress: () => console.log("Deleted"),
          style: "destructive",
        },
        {text : "Cancel", style: "cancel"}
      ],
    );
  };


  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Coffee</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomColor: "#1a759f",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    color: "#333",
  },
  button :{
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});