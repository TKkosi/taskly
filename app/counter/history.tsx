import { Text, View, StyleSheet , FlatList } from "react-native";
import { countdownStorageKey , PersistedCountdownState } from ".";
import { useEffect, useState } from "react";
import { getFromStorage } from "@/utils/storage";
import { format } from "date-fns";
import { theme } from "@/theme";

const fullDateFormat = `LLL d, yyyy 'at' h:mm a`;

export default function HistoryScreen() {
  const [countdownState , setCountdownState] = 
    useState<PersistedCountdownState>();

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(countdownStorageKey);
      setCountdownState(value);
    };
    init();
  }, []);

  return (
    <FlatList
    style={styles.list}
    contentContainerStyle={styles.contentContainer}
    data={countdownState?.completedAtTimestamps}
    renderItem={({ item }) => (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>
          {format(item, fullDateFormat)}
        </Text>
      </View>
    )}
    ListEmptyComponent={
      <View style={styles.listEmptyContainer}>
        <Text>No History</Text>
      </View>
    }
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer:{
    marginTop: 30,
  },
  listEmptyContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
  listItem: {
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: "center",
    backgroundColor: theme.colorLightGrey,
    padding: 12,
    borderRadius : 6,
  },
  listItemText: {
    fontSize: 18,
  },
});