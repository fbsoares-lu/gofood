import React from 'react';
import {ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Content, ContainerText} from './styles';

const Filter: React.FC = () => {
  return (
    <Container>
      <Content>
        <Icon name="user-check" size={16} color="#686868" />
        <ContainerText>Pra retirar</ContainerText>
      </Content>

      <Content>
        <Icon name="gift" size={16} color="#686868" />
        <ContainerText>Utilize desconto</ContainerText>
      </Content>

      <Content>
        <Icon name="credit-card" size={16} color="#686868" />
        <ContainerText>Vale refeição</ContainerText>
      </Content>

      <Content>
        <Icon name="user-check" size={16} color="#686868" />
        <ContainerText>Pra retirar</ContainerText>
      </Content>
    </Container>
  );
};

export default Filter;

// horizontal={true}
//       showsHorizontalScrollIndicator={false}
