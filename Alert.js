import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Button } from "react-native";

const crearDialogo = () => {
  Alert.alert(
    "Título",
    "Mensaje",
    [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: () => console.log("botón aceptar presionado"),
      },
    ],
    {
      cancelable: false,
    }
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="Abrir dialogo" onPress={crearDialogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: 22,
  },
});
