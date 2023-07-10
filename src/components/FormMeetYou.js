import { useState } from "react";
import { Button, TextInput, View } from "react-native";

const FormMeetYou = ({ name, setName }) => {
  const [input, setInput] = useState(name);

  return (
    <View>
      <TextInput
        placeholder="como te llamas?"
        value={input}
        onChangeText={setInput}
      />
      <Button
        title="enviar"
        onPress={() => {
          setName(input);
        }}
      />
    </View>
  );
};

export default FormMeetYou;
