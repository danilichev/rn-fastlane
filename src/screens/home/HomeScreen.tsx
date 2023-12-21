import React, { useMemo } from "react";
import { Text, View } from "react-native";
import {
  getApplicationName,
  getBuildNumber,
  getBundleId,
  getVersion,
} from "react-native-device-info";
import config from "react-native-ultimate-config";

import { styles } from "./styles";

export const HomeScreen = () => {
  const appInfo = useMemo(
    () => ({
      appName: getApplicationName(),
      buildNumber: getBuildNumber(),
      bundleId: getBundleId(),
      version: getVersion(),
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <Text>App name: {appInfo.appName}</Text>
      <Text>Bundle Id: {appInfo.bundleId}</Text>
      <Text>Version: {appInfo.version}</Text>
      <Text>Build: {appInfo.buildNumber}</Text>
      <Text>Environment: {config.ENVIRONMENT}</Text>
    </View>
  );
};
