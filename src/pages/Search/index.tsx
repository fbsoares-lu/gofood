import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';

import FindFoodSearchBar from '../../components/FindFoodSearchBar/index';
import SearchFood from '../../components/SearchFood';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Image source={logoImg} />
          <FindFoodSearchBar />
          <SearchFood />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
