import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider style={styles.root}>
      <Navigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});
