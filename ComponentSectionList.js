import React, { useState } from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Grupo 1",
            data: [
              { key: "1", name: "Nicolas" },
              { key: "2", name: "Pepe" },
              { key: "3", name: "Juan" },
              { key: "4", name: "Antonio" },
              { key: "5", name: "María" },
            ],
          },
          {
            title: "Grupo 2",
            data: [
              { key: "6", name: "Nicolas" },
              { key: "7", name: "Pepe" },
              { key: "8", name: "Juan" },
              { key: "9", name: "Antonio" },
              { key: "10", name: "María" },
            ],
          },
          {
            title: "Grupo 3",
            data: [
              { key: "11", name: "Nicolas" },
              { key: "12", name: "Pepe" },
              { key: "13", name: "Juan" },
              { key: "14", name: "Juan" },
              { key: "15", name: "Juan" },
              { key: "16", name: "Juan" },
            ],
          },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
      />
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
  section: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#eee",
    padding: 5,
  },
  item: {
    padding: 10,
    fontSize: 22,
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
