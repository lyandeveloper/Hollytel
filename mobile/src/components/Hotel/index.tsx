import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
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
import { useNavigation } from '@react-navigation/native';

interface IHotel {
  img: string;
  name: string;
  location: string;
  price: string;
  favorite?: boolean;
}

const Hotel: React.FC<IHotel> = ({
  img,
  name,
  location,
  price,
  favorite = false,
}) => {
  const navigation = useNavigation();
  return (
    <EHotel
      onPress={() => {
        navigation.navigate('Hotel');
      }}>
      <EHotelImg source={{ uri: `${img}` }} />
      <FavoriteHotel>
        {favorite === false ? (
          <Ionicons name="heart-outline" color="#fff" size={20} />
        ) : (
          <Ionicons name="heart" color="#f22e62ff" size={20} />
        )}
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
