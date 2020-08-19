import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 80px 20px;
`;

export const ProfileWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const ProfileContent = styled.View``;

export const ProfileName = styled.Text`
  width: 150px;
  font-size: 30px;
  font-weight: bold;
`;

export const ProfileEmail = styled.Text``;

export const ProfileAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 100px;
`;

export const SettingsWrapper = styled.View`
  margin-top: 50px;
`;

export const Settings = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const SettingsName = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
