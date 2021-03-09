import React from 'react';
import {Image, SafeAreaView, ScrollView} from 'react-native';

import logoImg from '../../assets/logo.png';

import AddressSearchBar from '../../components/AddresSearchBar';
import Filter from '../../components/Filter';
import FoodSearchBar from '../../components/FoodSearchBar';
import Pagination from '../../components/Pagination';
import Shops from '../../components/Shops';

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
          <AddressSearchBar />
          <Filter />
          <Pagination />
          <FoodSearchBar />
          <Shops />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
