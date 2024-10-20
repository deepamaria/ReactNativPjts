import { Image, StyleSheet, Platform, View, Text } from "react-native";

// import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
