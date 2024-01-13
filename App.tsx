import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ArrowRightIcon from "@/icon/arrow-right.svg";
import ArrowRightIcon2 from "./src/icon/arrow-right.svg";
// import Page from "./src/Page";
import Page from "@/Page";
// import Page from "./src/component/Page";
// import img from "./assets/icon.png";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on 2222sads app2 +{}+2 /!</Text>
      <ArrowRightIcon />
      <ArrowRightIcon2 />
      <Page />
      {/* <Image ></Image>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
