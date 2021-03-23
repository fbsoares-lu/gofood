import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';

import Filter from '../../components/Filter';
import FoodSearchBar from '../../components/FoodSearchBar';
import Shops from '../../components/Shops';
import Carousel from '../../components/Carousel';
import Location from '../../components/Location';

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
        <Container>
          <Image source={logoImg} />
          <Location />
          <Filter />
          <FoodSearchBar />
          <Carousel />
          <Shops />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
