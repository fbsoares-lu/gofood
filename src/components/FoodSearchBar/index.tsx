import React from 'react';
import {Image} from 'react-native';

import vegFood from '../../assets/veg.png';
import mexFood from '../../assets/mexFood.png';
import brFood from '../../assets/brazilFood.png';
import sweets from '../../assets/sweet.png';

import {
  Container,
  Content,
  ContainerText,
  ContentTab,
  ContentFirst,
} from './styles';

const FoodSearchBar: React.FC = () => {
  return (
    <Container>
      <ContentTab>
        <ContentFirst>
          <Image source={vegFood} />
          <ContainerText>Vegetariano</ContainerText>
        </ContentFirst>

        <Content>
          <Image source={mexFood} />
          <ContainerText>Tex-Mex</ContainerText>
        </Content>

        <Content>
          <Image source={brFood} />
          <ContainerText>Brasileira</ContainerText>
        </Content>

        <Content>
          <Image source={sweets} />
          <ContainerText>Doces</ContainerText>
        </Content>

        <Content>
          <Image source={mexFood} />
          <ContainerText>Mexicana</ContainerText>
        </Content>
      </ContentTab>
    </Container>
  );
};

export default FoodSearchBar;
