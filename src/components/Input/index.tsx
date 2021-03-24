import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, InputText} from './styles';

const Input: React.FC = () => {
  return (
    <Container>
      <Icon name="mail-outline" size={20} />
      <InputText />
    </Container>
  );
};

export default Input;
