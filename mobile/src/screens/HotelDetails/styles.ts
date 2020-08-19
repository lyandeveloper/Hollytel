import styled from 'styled-components/native';
import Swiper from 'react-native-swiper';

export const ContainerWrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const SwiperWrapper = styled(Swiper)`
  height: 250px;
`;

export const SwiperSlide = styled.Image`
  width: 100%;
  height: 250px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HotelInfo = styled.View`
  position: relative;
  top: -40px;
  width: 80%;
  left: 40px;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  elevation: 6;
`;

export const HotelInfoWrapper = styled.View``;

export const HotelName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const HotelLocation = styled.Text`
  font-size: 12px;
`;

export const HotelRate = styled.View`
  margin-left: 20px;
`;

export const HotelRateNumber = styled.Text`
  font-size: 18px;
  margin-right: 5px;
`;

export const HotelReviewNumber = styled.Text`
  font-size: 12px;
  color: #f22e62ff;
`;

export const HotelDescription = styled.View`
  padding: 0 50px;
`;

export const HotelDescriptionText = styled.Text`
  color: #888;
`;

export const HotelBenefits = styled.View`
  margin-top: 20px;
`;

export const BenefitTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 0 40px;
`;

export const BenefitGroup = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BenefitsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  padding: 0 30px;
`;

export const Benefit = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const BenefitType = styled.Text`
  font-size: 12px;
  color: #f22e62ff;
`;

export const HotelBooking = styled.View`
  background: #eee;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 40px;
`;

export const HotelBookingInfo = styled.View``;

export const HotelBookingPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const HotelBookingSpace = styled.Text``;

export const HotelBookingSubmit = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  background: #f22e62ff;
  padding: 0 30px;
  border-radius: 10px;
`;

export const HotelSubmitTxt = styled.Text`
  color: #fff;
  font-weight: bold;
`;
