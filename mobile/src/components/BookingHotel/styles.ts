import styled from 'styled-components/native';

export const PHotels = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  height: 200px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const HotelImg = styled.Image`
  position: absolute;
  width: 100%;
  height: 70%;
  border-radius: 10px;
`;

export const HotelHeader = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ReviewContainer = styled.View`
  background: #f22e62ff;
  padding: 2px;
  width: 45px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ReviewScore = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-right: 2px;
  margin-left: 2px;
`;

export const Favorite = styled.TouchableOpacity``;

export const HotelInfo = styled.View`
  position: relative;
  top: 80px;
  background: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
  z-index: 999;
`;

export const HotelName = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const HotelLocation = styled.View`
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HotelAddress = styled.Text`
  font-size: 14px;
`;

export const HotelPrice = styled.Text`
  font-size: 14px;
`;

export const PriceSpan = styled.Text`
  font-weight: bold;
`;

export const HotelTravelWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const HotelTravelGroup = styled.View``;

export const HotelTravelTitle = styled.Text`
  font-weight: bold;
`;

export const HotelTravelInfo = styled.Text`
  font-size: 16px;
`;
export const HotelBtnUpdate = styled.TouchableOpacity`
  border: 1px solid #f22e62ff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
`;
export const HotelBtnUpdateTxt = styled.Text`
  color: #f22e62ff;
  text-align: center;
`;
export const HotelBtnCancel = styled.TouchableOpacity`
  background: #f22e62ff;
  padding: 10px;
  margin-top: 10px;
  border-radius: 8px;
`;
export const HotelBtnCancelTxt = styled.Text`
  color: #fff;
  text-align: center;
  font-weight: bold;
`;
