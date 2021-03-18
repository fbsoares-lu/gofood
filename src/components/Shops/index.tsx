import React from 'react';

import shop1 from '../../assets/shop1.png';
import shop2 from '../../assets/shop2.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ContentText,
  HeaderText,
  Border,
  ShopGrid,
  ContentShopGridText,
  ShopName,
  ShopTime,
  ShopImage,
  Grid,
  ShopGridOthers,
} from './styles';

const Shops: React.FC = () => {
  return (
    <Container>
      <ContentText>
        <HeaderText>Lojas</HeaderText>
        <Border />
      </ContentText>

      <Grid>
        <ShopGrid>
          <ShopImage source={shop1} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#686868'}}
          />
        </ShopGrid>

        <ShopGridOthers>
          <ShopImage source={shop2} />
          <ContentShopGridText>
            <ShopName>Habib's</ShopName>
            <ShopTime>30 - 60 min - R$ 6,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#686868'}}
          />
        </ShopGridOthers>

        <ShopGridOthers>
          <ShopImage source={shop2} />
          <ContentShopGridText>
            <ShopName>Habib's</ShopName>
            <ShopTime>30 - 60 min - R$ 6,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#686868'}}
          />
        </ShopGridOthers>

        <ShopGridOthers>
          <ShopImage source={shop2} />
          <ContentShopGridText>
            <ShopName>Habib's</ShopName>
            <ShopTime>30 - 60 min - R$ 6,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#686868'}}
          />
        </ShopGridOthers>
      </Grid>
    </Container>
  );
};

export default Shops;
