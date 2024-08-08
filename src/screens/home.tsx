import React, {useEffect, useRef, useState} from 'react';
import {Keyboard, SafeAreaView, Text, TextInput, View} from 'react-native';

export const HomeScreen: React.FC = () => {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const [saudacao, setSaudacao] = useState<
    'Bom dia' | 'Boa tarde' | 'Boa noite'
  >('Bom dia');

  const search = (passwordName: string) => {
    console.log(passwordName);
  };
  const searchByEnterButton = () => {
    search(inputValue);
    inputRef.current?.blur();
    Keyboard.dismiss();
  };

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
    search(inputValue);
  }, [inputValue]);

  useEffect(() => {
    getSaudacao();
    setInterval(() => {
      getSaudacao();
    }, 60000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      <View
        className={
          'flex flex-col justify-end h-min-1/6 px-2 pb-6 pt-10 gap-2 bg-violet-700'
        }>
        <Text className="font-bold text-white text-lg">
          Bem vindo Felipe, {saudacao}!
        </Text>
        <View>
          <TextInput
            className="w-full pl-2 pr-4 py-2 border-2 rounded-md border-slate-300 text-white"
            placeholder="Buscar senha"
            placeholderTextColor={'#fafafad6'}
            cursorColor={'#fafafad6'}
            ref={inputRef}
            onEndEditing={searchByEnterButton}
            onChangeText={setInputValue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
