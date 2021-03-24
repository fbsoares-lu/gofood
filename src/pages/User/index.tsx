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
  UserHeader,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <UserHeader>
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
      </UserHeader>

      <ToolsContentFirst>
        <ToolsInfo>
          <Icon name="favorite-border" size={24} color="#686868" />
          <UserContentText>
            <ToolName>Favoritos</ToolName>
            <ToolInfo>Melhores pratos e restaurantes</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContentFirst>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="local-atm" size={24} color="#686868" />
          <UserContentText>
            <ToolName>Cupons</ToolName>
            <ToolInfo>Cupons de desconto</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="domain" size={24} color="#686868" />
          <UserContentText>
            <ToolName>Endereços</ToolName>
            <ToolInfo>Endereços de entrega</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="notifications-none" size={24} color="#686868" />
          <UserContentText>
            <ToolName>Notificações</ToolName>
            <ToolInfo>Central de notificações</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>

      <ToolsContent>
        <ToolsInfo>
          <Icon name="info-outline" size={24} color="#686868" />
          <UserContentText>
            <ToolName>Ajuda</ToolName>
            <ToolInfo>Entre em contato com a central</ToolInfo>
          </UserContentText>
        </ToolsInfo>
      </ToolsContent>
    </Container>
  );
};

export default Home;
