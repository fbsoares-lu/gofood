import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  height: 30px;

  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const ContentTab = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 10},
  showsHorizontalScrollIndicator: false,
})``;

export const ContentFirst = styled.TouchableOpacity`
  font-size: 14px;
  color: #39a900;
  background: #ffffff;
  border-radius: 10px;

  height: 30px;

  align-items: center;
  flex-direction: row;

  padding: 10px;
`;

export const Content = styled.TouchableOpacity`
  font-size: 14px;
  color: #39a900;
  background: #ffffff;
  border-radius: 10px;

  height: 30px;

  align-items: center;
  text-align: center;
  flex-direction: row;

  padding: 10px;

  margin-left: 8px;
`;

export const ContainerText = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  color: #39a900;
`;
