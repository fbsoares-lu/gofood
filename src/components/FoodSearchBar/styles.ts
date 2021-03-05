import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const ContentTab = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {paddingLeft: 40, paddingRight: 10},
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
