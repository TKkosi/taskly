import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@/theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen name="index" options={{ title: "Shopping List" , tabBarIcon: ({ color ,size }) => <Feather name="list" size={24} color={color} />}} />
      <Tabs.Screen name="counter" options={{ title: "Counter" ,headerShown:false , tabBarIcon: ({ color ,size }) => <FontAwesome5 name="plus" size={24} color={color} />}} />
      <Tabs.Screen name="idea" options={{ title: "Idea" , tabBarIcon: ({ color ,size }) => <AntDesign name="bulb1" size={24} color={color} />}} />
    </Tabs>
  );
}
