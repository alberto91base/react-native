import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      {/* //transparent={true} modal */}
      <Modal animationType="slide" transparent={false} visible={modal}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>Soy un modal</Text>
            <Button title="Cerrar modal" onPress={() => setModal(!modal)} />
          </View>
        </View>
      </Modal>
      <Text>Texto normal</Text>
      <Button title="Abrir modal" onPress={() => setModal(!modal)} />
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
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  content: {
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 25
  },
});
