import React, { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  ContainerWrapper,
  SwiperWrapper,
  SwiperSlide,
  HotelInfo,
  HotelInfoWrapper,
  HotelName,
  HotelLocation,
  HotelRate,
  HotelRateNumber,
  HotelReviewNumber,
  HotelDescription,
  HotelDescriptionText,
  HotelBenefits,
  BenefitTitle,
  BenefitsWrapper,
  BenefitGroup,
  Benefit,
  BenefitType,
  HotelBooking,
  HotelBookingInfo,
  HotelBookingPrice,
  HotelBookingSpace,
  HotelBookingSubmit,
  HotelSubmitTxt,
} from './styles';
import api from '../../services/api';

interface IHotel {
  id: number;
  name: string;
  description: string;
  city: string;
  country: string;
  address: string;
  price: string;
  guests: string;
  rooms: string;
  banner01: string;
  banner02: string;
  banner03: string;
  banner04: string;
}

const HotelDetails: React.FC = () => {
  const route = useRoute<any>();
  const [hotel, setHotel] = useState<IHotel>(Object);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHotelDetails() {
      const response = await api.get(`/hotels/details/${route.params.id}`);
      setHotel(response.data);
    }

    loadHotelDetails();
  }, []);

  console.log(hotel);

  return (
    <ContainerWrapper>
      <StatusBar backgroundColor="#f22e62ff" barStyle="light-content" />
      <SwiperWrapper
        dotColor={'rgba(255,255,255,0.5)'}
        activeDotColor={'#f22e62ff'}
        paginationStyle={{ bottom: 50 }}>
        <SwiperSlide
          source={{
            uri: `http://192.168.0.112:3333/uploads/${hotel.banner01}`,
          }}
        />
        <SwiperSlide
          source={{
            uri: `http://192.168.0.112:3333/uploads/${hotel.banner02}`,
          }}
        />
        <SwiperSlide
          source={{
            uri: `http://192.168.0.112:3333/uploads/${hotel.banner03}`,
          }}
        />
        <SwiperSlide
          source={{
            uri: `http://192.168.0.112:3333/uploads/${hotel.banner04}`,
          }}
        />
      </SwiperWrapper>
      <HotelInfo>
        <HotelInfoWrapper>
          <HotelName>{hotel.name}</HotelName>
          <HotelLocation>{`${hotel.address}, ${hotel.city}, ${hotel.country}`}</HotelLocation>
        </HotelInfoWrapper>
        <HotelRate>
          <HotelRateNumber>
            4.4
            <Ionicons name="star" color="#f22e62ff" size={18} />
          </HotelRateNumber>
          <HotelReviewNumber>44 reviews</HotelReviewNumber>
        </HotelRate>
      </HotelInfo>
      <HotelDescription>
        <HotelDescriptionText>{hotel.description}</HotelDescriptionText>
      </HotelDescription>

      <HotelBenefits>
        <BenefitTitle>Benefícios</BenefitTitle>
        <BenefitsWrapper>
          <BenefitGroup>
            <Benefit>
              <Ionicons name="wifi" color="#f22e62ff" size={40} />
              <BenefitType>Wifi Grátis</BenefitType>
            </Benefit>
            <Benefit>
              <Feather name="coffee" color="#f22e62ff" size={40} />
              <BenefitType>Café da manhã</BenefitType>
            </Benefit>
          </BenefitGroup>
          <BenefitGroup>
            <Benefit>
              <MaterialIcons
                name="fitness-center"
                color="#f22e62ff"
                size={40}
              />
              <BenefitType>Academia</BenefitType>
            </Benefit>

            <Benefit>
              <MaterialCommunityIcons
                name="air-filter"
                color="#f22e62ff"
                size={40}
              />
              <BenefitType>A.C</BenefitType>
            </Benefit>
          </BenefitGroup>
          <BenefitGroup>
            <Benefit>
              <MaterialIcons name="pool" color="#f22e62ff" size={40} />
              <BenefitType>Piscina</BenefitType>
            </Benefit>
            <Benefit>
              <MaterialIcons name="local-bar" color="#f22e62ff" size={40} />
              <BenefitType>Bar</BenefitType>
            </Benefit>
          </BenefitGroup>
        </BenefitsWrapper>
      </HotelBenefits>

      <HotelBooking>
        <HotelBookingInfo>
          <HotelBookingPrice>{`R$${hotel.price}`}</HotelBookingPrice>
          <HotelBookingSpace>{`${hotel.guests} pessoas, ${hotel.rooms} quartos`}</HotelBookingSpace>
        </HotelBookingInfo>
        <HotelBookingSubmit>
          <HotelSubmitTxt>Agendar</HotelSubmitTxt>
        </HotelBookingSubmit>
      </HotelBooking>
    </ContainerWrapper>
  );
};

export default HotelDetails;
