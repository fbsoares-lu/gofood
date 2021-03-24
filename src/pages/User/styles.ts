import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const UserHeader = styled.View`
  padding: 20px 0px;
  border-bottom-color: #cfcfcf;
  border-bottom-width: 2px;
  background: #f4f4f4;
`;

export const UserContent = styled.View`
  align-items: center;
  flex-direction: row;
  margin-left: 10px;
`;

export const UserContentText = styled.View`
  margin-left: 16px;
`;

export const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Level = styled.Text`
  font-size: 12px;
  color: #50bc11;
  line-height: 18px;
`;

export const UserTime = styled.Text`
  font-size: 12px;
  color: #686868;
`;

// export const Bar = styled.View`
//   margin-top: 20px;
//   height: 1px;
//   background: #686868;
// `;

export const ToolsContentFirst = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const ToolsContent = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
`;

export const ToolsInfo = styled.View`
  align-items: center;
  flex-direction: row;
  width: 95%;
  height: 67px;
  padding: 20px;
  border-radius: 10px;
`;

export const ToolName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ToolInfo = styled.Text`
  font-size: 14px;
  color: #686868;
`;
