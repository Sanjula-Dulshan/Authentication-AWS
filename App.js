import { Amplify } from "aws-amplify";
import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import awsconfig from "./src/aws-exports";
import Navigation from "./src/navigation";

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
