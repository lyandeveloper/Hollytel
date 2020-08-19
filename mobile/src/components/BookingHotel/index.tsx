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
  HotelPrice,
  PriceSpan,
  HotelTravelWrapper,
  HotelTravelGroup,
  HotelTravelTitle,
  HotelTravelInfo,
  HotelBtnUpdate,
  HotelBtnUpdateTxt,
  HotelBtnCancel,
  HotelBtnCancelTxt,
} from './styles';

const BookingHotel: React.FC = ({
  img,
  score,
  favorite = false,
  name,
  location,
  price,
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
          <HotelAddress>{location}</HotelAddress>
        </HotelLocation>
        <HotelPrice>
          <PriceSpan>R${price}</PriceSpan>/noite
        </HotelPrice>

        <HotelTravelWrapper>
          <HotelTravelGroup>
            <HotelTravelTitle>Você viajará dia:</HotelTravelTitle>
            <HotelTravelInfo>19 Ago - 25 Ago</HotelTravelInfo>
            <HotelBtnUpdate>
              <HotelBtnUpdateTxt>Alterar</HotelBtnUpdateTxt>
            </HotelBtnUpdate>
          </HotelTravelGroup>

          <HotelTravelGroup>
            <HotelTravelTitle>Hóspedes:</HotelTravelTitle>
            <HotelTravelInfo>03 hóspedes, 2 quartos</HotelTravelInfo>
            <HotelBtnCancel>
              <HotelBtnCancelTxt>Cancelar</HotelBtnCancelTxt>
            </HotelBtnCancel>
          </HotelTravelGroup>
        </HotelTravelWrapper>
      </HotelInfo>
    </PHotels>
  );
};

export default BookingHotel;
