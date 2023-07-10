import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/loginForm";
import { NavigationContainer } from "@react-navigation/native";
import Saludar from "./src/components/saludar";
import FormMeetYou from "./src/components/FormMeetYou";
import { useState } from "react";
import NavigationStack from "./src/Navigation/NavigationStack";
import NavigationTab from "./src/Navigation/NavigationTab";
import NavigatorDrawer from "./src/Navigation/NavigationDrawer";

export default function App() {
  const [name, setName] = useState("");

  return (
    <NavigationContainer>
      <NavigatorDrawer />
      {/* <NavigationTab /> */}
      {/* <NavigationStack /> */}
      {/* <View style={styles.container}>
        <FormMeetYou name={name} setName={setName} />
        <Saludar name={name} />
      </View> */}
    </NavigationContainer>
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
