import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import userImg from '../../assets/user.jpeg';

import {
  Container,
  UserContent,
  UserContentText,
  UserName,
  Level,
  UserTime,
  ToolsContent,
  ToolsInfo,
  ToolName,
  ToolInfo,
  ToolsContentFirst,
  Bar,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <UserContent>
        <Image
          source={userImg}
          style={{width: 70, height: 70}}
          borderRadius={50}
        />
        <UserContentText>
          <UserName>Lucas Henrique de F. B. Soares</UserName>
          <Level>Nível 4</Level>
          <UserTime>Tempo - 2 anos</UserTime>
        </UserContentText>
      </UserContent>

      <Bar />

      <ToolsContentFirst>
        <ToolsInfo>
          <Icon name="home-filled" size={24} />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContentFirst>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="home-filled" size={24} />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="home-filled" size={24} />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="home-filled" size={24} />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="home-filled" size={24} />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>
    </Container>
  );
};

export default Home;
