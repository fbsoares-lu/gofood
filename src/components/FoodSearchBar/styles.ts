import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  width: 100%;
`;

export const ContentTab = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 10},
  showsHorizontalScrollIndicator: false,
})``;

export const ContentFirst = styled.TouchableOpacity`
  font-size: 14px;
  color: #2b2b2b;
  width: 160px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  padding-left: 16px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Content = styled.TouchableOpacity`
  font-size: 14px;
  color: #2b2b2b;
  width: 160px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  padding-left: 16px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  margin-left: 8px;
`;

export const TextInfo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #39a900;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  height: 100%;
  flex: 1;
  margin-left: 16px;
`;

export const Rating = styled.View`
  flex-direction: row;
`;

export const ContainerText = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;

export const ContainerTextInfo = styled.Text`
  margin-left: 5px;
  font-size: 10px;
  color: #ffffff;
`;
