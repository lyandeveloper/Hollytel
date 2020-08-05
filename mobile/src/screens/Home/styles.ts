import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Profile = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: stretch;
  padding: 20px;
`;

export const ProfileHeader = styled.View``;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 28px;
`;

export const ProfileCall = styled.Text`
  font-size: 18px;
`;

export const ProfileAvatar = styled.TouchableOpacity`
  position: relative;
  width: 40px;
  height: 40px;
`;

export const ProfileImg = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
`;

export const SearchInput = styled.TextInput`
  position: absolute;
  border: 1px solid #ccc;
  height: 35px;
  padding: 5px;
  border-radius: 5px;
  width: 318px;
  top: 70px;
  margin-bottom: 20px;
`;

export const Session = styled.Text`
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-left: 20px;
`;

export const PopularHotels = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  padding-left: 20px;
`;

export const ExploreHotels = styled.View`
  padding: 20px;
  padding-top: 10px;
`;
