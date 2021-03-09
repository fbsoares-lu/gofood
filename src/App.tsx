import 'react-native-gesture-handler';
import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';
//import Home from './pages';
import pagination from './assets/pagination_01.png';
import Carousel from 'react-native-snap-carousel';

interface IItensProps {
  item: {
    title: string;
    image: string;
  };
}

const App: React.FC = () => {
  const carouselItems = [
    {
      title: 'oo',
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
    {
      title: 'oo',
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
    {
      title: 'oo',
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
  ];

  function renderImage({item}: IItensProps) {
    return (
      <View
        style={{
          height: 150,
          marginTop: 20,
        }}>
        <Text>{item.title}</Text>
        <Image
          style={{width: '100%', height: '100%', borderRadius: 20}}
          source={{uri: `${item.image}`}}
        />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F0" />
      {/* <Home /> */}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Carousel
          layout="default"
          data={carouselItems}
          renderItem={renderImage}
          sliderWidth={500}
          itemWidth={300}
        />
      </View>
    </>
  );
};

export default App;
