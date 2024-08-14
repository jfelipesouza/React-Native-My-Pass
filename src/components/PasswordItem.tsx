import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Copy, Edit} from 'lucide-react-native';

type PasswordItemProps = {passName: string; passValue: string};

export const PasswordItem = ({passName, passValue}: PasswordItemProps) => {
  const handleCopyPasswordValue = () => {
    console.log(passValue);
  };

  return (
    <View className={'ml-1 px-1 border-l-2 border-black/40'}>
      <View className="flex-row  my-1 justify-between items-center p-2 rounded bg-gray-200">
        <View>
          <Text className="text-black font-semibold text-base">{passName}</Text>
          <Text className="text-black/70  text-base"> ******** </Text>
        </View>
        <View className="flex-row gap-x-5">
          <TouchableOpacity onPress={handleCopyPasswordValue}>
            <Copy size={22} className="text-gray-500" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Edit size={22} className="text-gray-500" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
