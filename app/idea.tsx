import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export default function IdeaScreen() {
  const confettiRef = useRef<any>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Idea</Text>
      <ConfettiCannon
        ref={confettiRef}
        count={50}
        origin={{ x: Dimensions.get("window").width / 2, y: -30 }}
        autoStart={false}
        fadeOut={true}
      />  
      <TouchableOpacity onPress={() => confettiRef.current?.start()} style={styles.button}>
        <Text style={styles.buttonText}>Celebrate Idea!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

