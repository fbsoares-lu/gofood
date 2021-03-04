import React from 'react';
import {StatusBar} from 'react-native';
import Home from './pages';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#2da0bd" />
      <Home />
    </>
  );
};

export default App;
