import 'react-native-gesture-handler';
import React from 'react';
import Home from './pages';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      <Home />
    </>
  );
};

export default App;
