import React from 'react';
import {Image} from 'react-native';

import logoImg from '../assets/logo.png';

import AddressSearchBar from '../components/AddresSearchBar';

import {Container} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <AddressSearchBar />
    </Container>
  );
};

export default Home;
