import 'react-native-gesture-handler';
import React from 'react';
import Home from './pages';
import {StatusBar} from 'react-native';
//import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      <Home />
      {/* <SignIn /> */}
    </>
  );
};

export default App;
