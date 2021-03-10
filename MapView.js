import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Constants from "expo-constants";

export default function App() {
  const [location, setLocation] = useState({})
  const searchLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    const status2 = "Ppep";
    if (status !== "granted") {
      return Alert.alert("No tenemos los permisos necesarios");
    }
    const locationGet = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Lowest,
    });
    console.log(locationGet);
    setLocation(locationGet)
  };
  useEffect(() => {
    searchLocation();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Texto</Text>
      <MapView style={styles.map}>
        {location.coords ? (
          <Marker
            coordinate={location.coords}
            title="titulo"
            description="description"
          />
        ) : null}
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
