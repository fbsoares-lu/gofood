import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, ContainerText} from './styles';

const AddressSearchBar: React.FC = () => {
  return (
    <Container>
      <Icon name="search" size={22} color="#39A900" style={{marginLeft: 20}} />
      <ContainerText placeholder="Informe o local ou comida" />
    </Container>
  );
};

export default AddressSearchBar;
