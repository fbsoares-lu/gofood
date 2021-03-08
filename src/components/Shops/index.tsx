import React from 'react';

import ShopLogo from '../../assets/ShopLogo.png';

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
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
        </ShopGrid>

        <ShopGrid>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
        </ShopGrid>

        <ShopGrid>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
        </ShopGrid>
      </Grid>
    </Container>
  );
};

export default Shops;
