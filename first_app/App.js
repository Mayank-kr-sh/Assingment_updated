import { View, Text, StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tale Wallet</Text>
      <StatusBar style="auto" />
    </View>
  );
}
