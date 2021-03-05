import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  width: 100%;
`;

export const Content = styled.TouchableOpacity`
  height: 187px;
`;

export const PaginationBackground = styled.ImageBackground`
  flex: 1;
  padding: 20px;
`;

export const PaginationText = styled.Text`
  width: 200px;
  font-size: 18px;
  color: #ffffff;
  line-height: 30px;
`;

export const PaginationButton = styled.View`
  height: 25px;
  background: #39a900;
  width: 100px;
  margin-top: 20px;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const PaginationButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
`;
