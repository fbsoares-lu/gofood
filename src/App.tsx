import React from 'react';
import {StatusBar} from 'react-native';
import Home from './pages';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#39a900" />
      <Home />
    </>
  );
};

export default App;
