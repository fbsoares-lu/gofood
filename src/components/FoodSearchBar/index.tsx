import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import vegFood from '../../assets/salad1.png';
import sushiFood from '../../assets/sushi.png';
import coffee from '../../assets/coffee.png';
import drink from '../../assets/drink.png';
import seafood from '../../assets/seafood.png';
import candy from '../../assets/candy.png';

import {
  Container,
  Content,
  ContainerText,
  ContentTab,
  ContentFirst,
  ContainerTextInfo,
  TextInfo,
  Rating,
} from './styles';

const FoodSearchBar: React.FC = () => {
  return (
    <Container>
      <ContentTab>
        <ContentFirst>
          <Image source={coffee} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Lanches</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </ContentFirst>

        <Content>
          <Image source={sushiFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Sushi</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,7</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Saladas</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={drink} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Bebidas</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,2</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={seafood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Frutos do mar</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={candy} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Doces</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#FFE722" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>
      </ContentTab>
    </Container>
  );
};

export default FoodSearchBar;
