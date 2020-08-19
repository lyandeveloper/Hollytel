import React from 'react';
import { View } from 'react-native';

import {
  Container,
  ProfileWrapper,
  ProfileContent,
  ProfileName,
  ProfileEmail,
  ProfileAvatar,
  SettingsWrapper,
  Settings,
  SettingsName,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ProfileWrapper>
        <ProfileContent>
          <ProfileName>William Carter</ProfileName>
          <ProfileEmail>williamcarter@gmail.com</ProfileEmail>
        </ProfileContent>
        <ProfileAvatar
          source={{
            uri:
              'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
          }}
        />
      </ProfileWrapper>

      <SettingsWrapper>
        <Settings>
          <SettingsName>Editar perfil</SettingsName>
        </Settings>
        <Settings>
          <SettingsName>Mudar senha</SettingsName>
        </Settings>
        <Settings>
          <SettingsName>Ajuda e suporte</SettingsName>
        </Settings>
        <Settings>
          <SettingsName>Configurações</SettingsName>
        </Settings>
        <Settings onPress={() => navigation.navigate('Login')}>
          <SettingsName>Sair</SettingsName>
        </Settings>
      </SettingsWrapper>
    </Container>
  );
};

export default Profile;
