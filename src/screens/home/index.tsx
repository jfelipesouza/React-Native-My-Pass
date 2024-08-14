import React, {useEffect, useState} from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';

import {HomeHeaderComponent} from './Header';
import {AddButtonNavigation} from './AddButtonNavigation';
import {PasswordItem} from '../../components/PasswordItem';

const SectionTitle = (title: string) => {
  return <Text className="text-black font-bold text-lg">{title}</Text>;
};

type Sections = {
  title: string;
  sections: any[];
};
export const HomeScreen: React.FC = () => {
  const [sections, setSections] = useState<Sections[]>([]);

  const search = (passwordName: string) => {
    console.log(passwordName);
  };

  useEffect(() => {
    setSections([{title: 'A', sections: [{name: 'Amazon', value: 'batata'}]}]);
  }, []);

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      <HomeHeaderComponent searchByEnterButton={search} />
      <AddButtonNavigation />

      <SectionList sections={sections} renderItem={() => <View></View>} />
    </SafeAreaView>
  );
};
