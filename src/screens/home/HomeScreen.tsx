import React from "react";
import { Alert, Text, View } from "react-native";
import config from "react-native-ultimate-config";

import { Touchable } from "src/components";

import { styles } from "./styles";

export const HomeScreen = () => (
  <View style={styles.container}>
    <Touchable
      onPress={() => {
        Alert.alert("boo!");
      }}
    >
      <Text>Current environment is {config.ENVIRONMENT}</Text>
    </Touchable>
  </View>
);
