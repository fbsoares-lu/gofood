import React from 'react';

import ShopLogo from '../../assets/ShopLogo.png';
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
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#535353'}}
          />
        </ShopGrid>

        <ShopGridOthers>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#535353'}}
          />
        </ShopGridOthers>

        <ShopGridOthers>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#535353'}}
          />
        </ShopGridOthers>

        <ShopGridOthers>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#535353'}}
          />
        </ShopGridOthers>

        <ShopGridOthers>
          <ShopImage source={ShopLogo} />
          <ContentShopGridText>
            <ShopName>Mc Donalds</ShopName>
            <ShopTime>30 - 40 min - R$ 8,90</ShopTime>
          </ContentShopGridText>
          <Icon
            name="chevron-right"
            size={24}
            style={{position: 'absolute', right: 20, color: '#535353'}}
          />
        </ShopGridOthers>
      </Grid>
    </Container>
  );
};

export default Shops;
