import React from 'react';
import {Image} from 'react-native';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {Container} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logo} />
      <Input />
      <Button />
    </Container>
  );
};

export default SignIn;
