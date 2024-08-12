import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

import {HomeHeaderComponent} from './Header';

export const HomeScreen: React.FC = () => {
  const search = (passwordName: string) => {
    console.log(passwordName);
  };

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      <HomeHeaderComponent searchByEnterButton={search} />
      <Text className={'my-3 ml-2 text-black font-bold text-xl'}>
        Suas senhas
      </Text>
      <TouchableOpacity
        className={
          'absolute bottom-4 right-4 h-10 w-10 bg-violet-700 items-center justify-center rounded-full z-40'
        }
        style={{elevation: 2}}>
        <Text className="font-bold text-white text-3xl">+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
