import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  ContainerText,
  ContentTab,
  ContentFirst,
} from './styles';

const Filter: React.FC = () => {
  return (
    <Container>
      <ContentTab>
        <ContentFirst>
          <Icon name="add-business" size={20} color="#686868" />
          <ContainerText>Pra retirar</ContainerText>
        </ContentFirst>

        <Content>
          <Icon name="local-atm" size={20} color="#686868" />
          <ContainerText>Utilize desconto</ContainerText>
        </Content>

        <Content>
          <Icon name="credit-card" size={20} color="#686868" />
          <ContainerText>Vale refeição</ContainerText>
        </Content>

        <Content>
          <Icon name="directions-run" size={20} color="#686868" />
          <ContainerText>Distância</ContainerText>
        </Content>
      </ContentTab>
    </Container>
  );
};

export default Filter;

// horizontal={true}
//       showsHorizontalScrollIndicator={false}
