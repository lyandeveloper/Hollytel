import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  PHotels,
  HotelImg,
  HotelHeader,
  ReviewContainer,
  ReviewScore,
  Favorite,
  HotelInfo,
  HotelName,
  HotelLocation,
  HotelAddress,
} from './styles';

const PopularHotel: React.FC = ({ img, name, location, score }) => {
  return (
    <PHotels>
      <HotelImg
        source={{
          uri: `${img}`,
        }}
      />
      <HotelHeader>
        <ReviewContainer>
          <ReviewScore>{score}</ReviewScore>
          <Ionicons name="star" color="#fff" size={15} />
        </ReviewContainer>
        <Favorite>
          <Ionicons name="heart-outline" color="#fff" size={20} />
        </Favorite>
      </HotelHeader>
      <HotelInfo>
        <HotelName>{name}</HotelName>
        <HotelLocation>
          <Ionicons name="location" color="#f22e62ff" size={20} />
          <HotelAddress>{location}</HotelAddress>
        </HotelLocation>
      </HotelInfo>
    </PHotels>
  );
};

export default PopularHotel;
