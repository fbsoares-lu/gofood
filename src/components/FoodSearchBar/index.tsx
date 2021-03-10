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
  ContainerHeadText,
  ContentText,
  Border,
} from './styles';

const FoodSearchBar: React.FC = () => {
  return (
    <Container>
      <ContentText>
        <ContainerHeadText>Sugestôes</ContainerHeadText>
        <Border />
      </ContentText>

      <ContentTab>
        <ContentFirst>
          <Image source={vegFood} />
          <ContainerText>Vegetariana</ContainerText>
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
