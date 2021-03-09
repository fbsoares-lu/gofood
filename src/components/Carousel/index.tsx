import React from 'react';
import {Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface IItensProps {
  item: {
    image: string;
  };
}

const Pagination: React.FC = () => {
  const paginationData = [
    {
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
    {
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
    {
      image: 'https://i.imgur.com/oWZWTCl.png',
    },
  ];

  function renderImage({item}: IItensProps) {
    return (
      <View
        style={{
          height: 190,
          width: 350,
          marginTop: 30,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 20,
          }}
          source={{uri: `${item.image}`}}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Carousel
        data={paginationData}
        renderItem={renderImage}
        sliderWidth={350}
        itemWidth={350}
      />
    </View>
  );
};

export default Pagination;
