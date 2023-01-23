import { StyleSheet } from "react-native";
import Navigation from "./src/navigation";
import { NativeBaseProvider } from "native-base";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

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
