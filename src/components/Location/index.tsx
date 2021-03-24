import React from 'react';

import {
  Container,
  Content,
  TextLocation,
  BottomBarLocationText,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Location: React.FC = () => {
  return (
    <Container>
      <Content>
        <Icon
          name="keyboard-arrow-down"
          size={20}
          color="#39A900"
          style={{marginRight: 4}}
        />
        <BottomBarLocationText>
          <TextLocation>Rua John Doe, 123</TextLocation>
        </BottomBarLocationText>
      </Content>
    </Container>
  );
};

export default Location;
