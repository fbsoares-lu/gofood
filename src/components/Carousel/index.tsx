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
      image: 'https://i.imgur.com/khxeclR.png',
    },
    // {
    //   image: 'https://i.imgur.com/T8LLZO8.png',
    // },
    {
      image: 'https://i.imgur.com/khxeclR.png',
    },
    {
      image: 'https://i.imgur.com/a4vkuar.png',
    },
  ];

  function renderImage({item}: IItensProps) {
    return (
      <View
        style={{
          height: 190,
          marginTop: 20,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
          }}
          source={{uri: `${item.image}`}}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Carousel
        data={paginationData}
        renderItem={renderImage}
        sliderWidth={375}
        itemWidth={375}
      />
    </View>
  );
};

export default Pagination;
