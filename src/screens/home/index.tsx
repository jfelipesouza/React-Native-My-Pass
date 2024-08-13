import React from 'react';
import {SafeAreaView, Text} from 'react-native';

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
    </SafeAreaView>
  );
};
