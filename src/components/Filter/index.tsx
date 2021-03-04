import React from 'react';
import {ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {Container, Content, ContainerText} from './styles';

const Filter: React.FC = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      horizontal={true}
      showsHorizontalScrollIndicator={true}>
      <Container>
        <Content>
          <Icon name="user-check" size={16} color="#ffffff" />
          <ContainerText>Pra retirar</ContainerText>
        </Content>

        <Content>
          <Icon name="user-check" size={16} color="#ffffff" />
          <ContainerText>Pra retirar</ContainerText>
        </Content>

        <Content>
          <Icon name="user-check" size={16} color="#ffffff" />
          <ContainerText>Pra retirar</ContainerText>
        </Content>

        <Content>
          <Icon name="user-check" size={16} color="#ffffff" />
          <ContainerText>Pra retirar</ContainerText>
        </Content>
      </Container>
    </ScrollView>
  );
};

export default Filter;
