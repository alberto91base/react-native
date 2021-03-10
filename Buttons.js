import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

export default function Buttons() {
  const [text, setText] = useState("");
  const [submit, setSubmit] = useState("");
  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <Button
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
        title="Aceptar"
      />
      <TouchableHighlight
        underlayColor={"#999"}
        activeOpacity={0.2}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
      >
        <Text>Aceptar</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#999", true)}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con exito");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#eee",
  },
  view: {
    height: "20%",
    width: "50%",
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: "90%",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
