import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import vegFood from '../../assets/salad.png';

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
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Vegetariana</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#fff" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </ContentFirst>

        <Content>
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Vegetariana</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#fff" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Vegetariana</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#fff" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Vegetariana</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#fff" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>

        <Content>
          <Image source={vegFood} style={{height: 32, width: 32}} />
          <TextInfo>
            <ContainerText>Vegetariana</ContainerText>
            <Rating>
              <Icon name="star-rate" color="#fff" />
              <ContainerTextInfo>4,5</ContainerTextInfo>
            </Rating>
          </TextInfo>
        </Content>
      </ContentTab>
    </Container>
  );
};

export default FoodSearchBar;
