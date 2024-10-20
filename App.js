import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Kitty Avatar */}
      <Image
        source={require('./assets/kitty-avatar.png')} // Access your local image from assets
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    backgroundColor: '#f5f5f5', // Optional: background color for contrast
  },
  avatar: {
    width: 150,  // Width of the kitty avatar image
    height: 150, // Height of the kitty avatar image
    zIndex: 3,   // Ensures this image is above other elements
    position: 'relative', // Needed to apply zIndex
  },
});
