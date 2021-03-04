import React from 'react';
import {Image} from 'react-native';

import logoImg from '../assets/logo.png';

import AddressSearchBar from '../components/AddresSearchBar';
import Filter from '../components/Filter';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <AddressSearchBar />
      <Filter />
    </Container>
  );
};

export default Home;
