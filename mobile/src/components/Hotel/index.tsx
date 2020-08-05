import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  ExploreHotels,
  EHotel,
  EHotelImg,
  FavoriteHotel,
  EHotelInfoContainer,
  EHotelInfo,
  EHotelName,
  EHotelLocation,
  EHotelReviewPrice,
  EHotelPrice,
  Reviews,
} from './styles';

const Hotel: React.FC = ({ img, name, location, price }) => {
  return (
    <EHotel>
      <EHotelImg source={{ uri: `${img}` }} />
      <FavoriteHotel>
        <Ionicons name="heart-outline" color="#fff" size={20} />
      </FavoriteHotel>
      <EHotelInfoContainer>
        <EHotelInfo>
          <EHotelName>{name}</EHotelName>
          <EHotelLocation>
            <Ionicons name="location" color="#f22e62ff" size={20} /> {location}
          </EHotelLocation>
        </EHotelInfo>
        <EHotelReviewPrice>
          <EHotelPrice>{price}</EHotelPrice>
          <Reviews>
            <Ionicons name="star" color="#f22e62ff" size={15} />
            <Ionicons name="star" color="#f22e62ff" size={15} />
            <Ionicons name="star" color="#f22e62ff" size={15} />
            <Ionicons name="star" color="#f22e62ff" size={15} />
            <Ionicons name="star" color="#f22e62ff" size={15} />
          </Reviews>
        </EHotelReviewPrice>
      </EHotelInfoContainer>
    </EHotel>
  );
};

export default Hotel;
