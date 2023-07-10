import React from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View>
      <Text> hola </Text>
      <Button onPress={goToSettings} title="Ir a ajustes" />
    </View>
  );
}
