import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="pass" value={pass} onChangeText={setPass} />
      <Button
        title="enviar"
        onPress={() => {
          console.log("datos al back");
          console.log(email);
          console.log(pass);
        }}
      />
    </View>
  );
}
