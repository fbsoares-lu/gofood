import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, ContainerText} from './styles';

const AddressSearchBar: React.FC = () => {
  return (
    <Container>
      <Icon
        name="location-on"
        size={22}
        color="#39A900"
        style={{marginLeft: 20}}
      />
      <ContainerText placeholder="R. Manoel Felipe John Doe, 1234" />
    </Container>
  );
};

export default AddressSearchBar;
