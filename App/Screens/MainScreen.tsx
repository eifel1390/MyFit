import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

export const MainScreen: () => JSX.Element = () => {
  const handlePressButton = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
    });
    console.log('result is ', JSON.stringify(result));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePressButton}>
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
