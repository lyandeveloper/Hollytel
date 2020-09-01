import React, { useState, ReactNode } from 'react';
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

interface PHotel {
  img: string;
  name: string;
  location: string;
  score: string;
  favorite?: boolean;
}

const PopularHotel: React.FC<PHotel> = ({
  img,
  name,
  location,
  score,
  favorite = false,
}) => {
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
          {favorite === false ? (
            <Ionicons name="heart-outline" color="#fff" size={20} />
          ) : (
            <Ionicons name="heart" color="#f22e62ff" size={20} />
          )}
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
