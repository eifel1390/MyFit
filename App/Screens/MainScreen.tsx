import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const MainScreen: () => JSX.Element = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('press button');
        }}>
        <Text style={styles.text}>{'Download video'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
