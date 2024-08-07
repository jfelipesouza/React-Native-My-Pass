import React from 'react';
import {StatusBar} from 'react-native';
import {MainNavigationContainer} from './routes';

const MyApp: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'light-content'}
      />
      <MainNavigationContainer />
    </>
  );
};

export {MyApp};
