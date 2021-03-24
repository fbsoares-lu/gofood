import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0F0F0',
      }}>
      <ScrollView>
        <Container />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
