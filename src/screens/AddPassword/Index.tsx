import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MoveLeft} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';

import {Checkbox} from '../../../components/Checkbox';

export const AddPasswordScreen = () => {
  const {canGoBack, goBack} = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    }
  };
  return (
    <View>
      <View className="bg-violet-600 pt-4 pb-2 px-3 justify-end ">
        <TouchableOpacity
          disabled={!canGoBack()}
          onPress={handleGoBack}
          className={
            'flex-row gap-x-1 mb-1 mt-3 items-center w-28 rounded-md  '
          }>
          <MoveLeft size={24} color={'white'} />
          <Text className="text-white font-semibold text-xl"> Voltar</Text>
        </TouchableOpacity>
        <Text className=" text-white text-2xl font-bold">
          Cadastre um nova senha
        </Text>
      </View>

      <View className="px-2 gap-y-2">
        <View className={'flex-col gap-y-2'}>
          <Text className="text-xl text-black font-bold"> Nome da senha</Text>
          <TextInput
            className="border-2 p-2 mx-1 rounded border-slate-500 focus:border-violet-900 "
            placeholder="informe a senha"
          />
        </View>
        <View className={'flex-col gap-y-2'}>
          <Text className="text-xl text-black font-bold"> Senha</Text>
          <TextInput
            className="border-2 p-2 mx-1 rounded border-slate-500 focus:border-violet-900 "
            placeholder="informe a senha"
          />
        </View>
      </View>
      <View className="mx-2 my-5 h-[2px] bg-black/50 rounded" />

      <Checkbox label="Configurar Alarme" />
    </View>
  );
};
