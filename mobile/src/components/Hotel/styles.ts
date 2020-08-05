import styled from 'styled-components/native';
export const ExploreHotels = styled.View`
  flex: 1;
`;

export const EHotel = styled.TouchableOpacity`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const EHotelImg = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const FavoriteHotel = styled.TouchableOpacity`
  display: flex;
  align-self: flex-end;
  margin-right: 10px;
  margin-top: 10px;
`;

export const EHotelInfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border: 1px solid #eee;
  border-radius: 10px;
`;

export const EHotelInfo = styled.View``;

export const EHotelName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const EHotelLocation = styled.Text`
  font-size: 12px;
`;

export const EHotelReviewPrice = styled.View``;

export const EHotelPrice = styled.Text`
  font-weight: bold;
`;

export const Reviews = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
