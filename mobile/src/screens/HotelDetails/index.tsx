import React from 'react';
import { StatusBar } from 'react-native';
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

const HotelDetails: React.FC = () => {
  return (
    <ContainerWrapper>
      <StatusBar backgroundColor="#f22e62ff" barStyle="light-content" />
      <SwiperWrapper
        dotColor={'rgba(255,255,255,0.5)'}
        activeDotColor={'#f22e62ff'}
        paginationStyle={{ bottom: 50 }}>
        <SwiperSlide
          source={{ uri: 'https://images8.alphacoders.com/812/812133.jpg' }}
        />
        <SwiperSlide
          source={{
            uri:
              'https://i.pinimg.com/originals/c6/60/24/c66024ea79527d9bbafe79ed171558b9.jpg',
          }}
        />
        <SwiperSlide
          source={{
            uri:
              'https://img2.chinadaily.com.cn/images/201811/16/5bee5c66a310eff36906b2f7.jpeg',
          }}
        />
        <SwiperSlide
          source={{
            uri: 'https://www.caterlyst.com/Caterlyst/Images/news/N19404.png',
          }}
        />
      </SwiperWrapper>
      <HotelInfo>
        <HotelInfoWrapper>
          <HotelName>The Rita Suites</HotelName>
          <HotelLocation>Las Vegas Strip, Las Vegas</HotelLocation>
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
        <HotelDescriptionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut
          optio dolorum id deleniti, cumque tempora ipsa eius veniam deserunt
        </HotelDescriptionText>
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
          <HotelBookingPrice>R$ 300</HotelBookingPrice>
          <HotelBookingSpace>3 pessoas, 2 quartos</HotelBookingSpace>
        </HotelBookingInfo>
        <HotelBookingSubmit>
          <HotelSubmitTxt>Agendar</HotelSubmitTxt>
        </HotelBookingSubmit>
      </HotelBooking>
    </ContainerWrapper>
  );
};

export default HotelDetails;
