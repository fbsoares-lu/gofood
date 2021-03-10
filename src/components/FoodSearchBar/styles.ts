import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
`;

export const ContentText = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;

export const Border = styled.View`
  margin-left: 20px;
  background: #b2b2b2;
  height: 1px;
  flex: 1;
  background: #b2b2b2;
`;

export const ContainerHeadText = styled.Text`
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #39a900;
`;

export const ContentTab = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 10},
  showsHorizontalScrollIndicator: false,
})``;

export const ContentFirst = styled.TouchableOpacity`
  font-size: 14px;
  color: #2b2b2b;
  width: 100px;
  height: 100px;
  border-color: #bebebe;
  border-width: 1px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.TouchableOpacity`
  font-size: 14px;
  color: #2b2b2b;
  width: 100px;
  height: 100px;
  border-color: #bebebe;
  border-width: 1px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-left: 8px;
`;

export const ContainerText = styled.Text`
  font-size: 12px;
  margin-top: 5px;
  color: #686868;
`;
