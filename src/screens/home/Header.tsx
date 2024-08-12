import {Search} from 'lucide-react-native';
import React, {useEffect, useRef, useState} from 'react';

import {View, Text, TextInput, TouchableOpacity} from 'react-native';

type HeaderProps = {
  searchByEnterButton: (password: string) => void;
};
export const HomeHeaderComponent: React.FC<HeaderProps> = ({
  searchByEnterButton,
}) => {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const [saudacao, setSaudacao] = useState<
    'Bom dia' | 'Boa tarde' | 'Boa noite'
  >('Bom dia');

  const getSaudacao = () => {
    const time = new Date();
    if (
      time.getHours() < 12 ||
      (time.getHours() === 12 && time.getMinutes() === 0)
    ) {
      setSaudacao('Bom dia');
    } else if (
      (time.getHours() === 12 && time.getMinutes() > 0) ||
      (time.getHours() > 12 && time.getHours() < 19)
    ) {
      setSaudacao('Boa tarde');
    } else {
      setSaudacao('Boa noite');
    }

    console.log(saudacao);
  };

  useEffect(() => {
    getSaudacao();
    // setInterval(() => {
    //   getSaudacao();
    // }, 60 * 60 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View
      className={
        'flex flex-col justify-end h-min-1/6 px-2 pb-6 pt-10 gap-y-2 bg-violet-700'
      }>
      <Text className="font-bold text-white text-lg">
        Bem vindo Felipe, {saudacao}!
      </Text>
      <View className={'flex-row  justify-between items-center '}>
        <TextInput
          className={
            'flex-1 h-12 px-2 pr-12 text-base border-2 rounded-md border-slate-300 text-white bg-violet-600'
          }
          placeholder={'Buscar senha'}
          placeholderTextColor={'#fafafad6'}
          cursorColor={'#fafafad6'}
          ref={inputRef}
          onEndEditing={() => searchByEnterButton(inputValue)}
          onChangeText={setInputValue}
        />
        <TouchableOpacity
          disabled={inputValue.trim().length < 1}
          onPressIn={() => searchByEnterButton(inputValue)}
          className={`absolute right-2 w-8 h-8  rounded-full justify-center items-center ${
            inputValue.trim().length > 0 ? 'bg-white/40' : 'bg-white/20'
          }`}>
          <Search size={18} className={'text-white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
