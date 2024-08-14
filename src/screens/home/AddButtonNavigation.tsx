import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const AddButtonNavigation = () => {
  const {navigate} = useNavigation();

  const goToAddScreen = () => {
    navigate('addPass' as never);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goToAddScreen}
      className={
        'absolute bottom-4 right-4 h-10 w-10 bg-violet-700 items-center justify-center rounded-full z-40'
      }
      style={styles.btnElevation}>
      <Text className="font-bold text-white text-3xl">+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnElevation: {elevation: 2},
});
