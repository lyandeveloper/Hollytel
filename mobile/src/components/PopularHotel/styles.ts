import styled from 'styled-components/native';

export const PHotels = styled.TouchableOpacity`
  position: relative;
  width: 180px;
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
  width: 50px;
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
  position: absolute;
  bottom: 0;
  background: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #eee;
`;

export const HotelName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  width: 105px;
`;

export const HotelLocation = styled.View`
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 200px;
`;

export const HotelAddress = styled.Text`
  font-size: 12px;
`;
