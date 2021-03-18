import React from 'react';
import {Image} from 'react-native';

import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import food4 from '../../assets/food4.png';
import food5 from '../../assets/food5.png';
import food6 from '../../assets/food6.png';
import food7 from '../../assets/food7.png';

import {Container, Content} from './styles';

const SearchFood: React.FC = () => {
  return (
    <Container>
      <Content>
        <Image source={food1} />
        <Image source={food2} />
      </Content>

      <Content>
        <Image source={food3} />
        <Image source={food4} />
      </Content>

      <Content>
        <Image source={food5} />
        <Image source={food6} />
      </Content>

      <Content>
        <Image source={food7} />
        <Image source={food3} />
      </Content>
    </Container>
  );
};

export default SearchFood;
