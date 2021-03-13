import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';

import FindFoodSearchBar from '../../components/FindFoodSearchBar/index';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <FindFoodSearchBar />
    </Container>
  );
};

export default Home;
