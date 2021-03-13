import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const ContentText = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderText = styled.Text`
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #39a900;
`;

export const Border = styled.View`
  margin-left: 20px;
  background: #b2b2b2;
  height: 1px;
  flex: 1;
  background: #b2b2b2;
`;

export const Grid = styled.View`
  align-items: center;
`;

export const ShopGrid = styled.View`
  border: 1px solid #b2b2b2;
  width: 95%;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
`;

export const ShopGridOthers = styled.View`
  margin-top: 8px;
  border: 1px solid #b2b2b2;
  width: 95%;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
`;

export const ShopImage = styled.Image`
  border-radius: 50px;
  margin-left: 10px;
`;

export const ContentShopGridText = styled.View`
  margin-left: 16px;
`;

export const ShopName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 26px;
`;

export const ShopTime = styled.Text`
  font-size: 14px;
  color: #686868;
`;
