import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const AddButtonNavigation = () => {
  return (
    <TouchableOpacity
      className={
        'absolute bottom-4 right-4 h-10 w-10 bg-violet-700 items-center justify-center rounded-full z-40'
      }
      style={{elevation: 2}}>
      <Text className="font-bold text-white text-3xl">+</Text>
    </TouchableOpacity>
  );
};
