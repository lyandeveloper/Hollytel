import React, { useContext } from 'react';
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
import AuthContext from '../../contexts/auth';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const { signOut, user } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <Container>
      <ProfileWrapper>
        <ProfileContent>
          <ProfileName>{user.name}</ProfileName>
          <ProfileEmail>{user.email}</ProfileEmail>
        </ProfileContent>
        <ProfileAvatar
          source={{
            uri: `https://api.adorable.io/avatars/285/${user.name}.png`,
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
        <Settings onPress={handleSignOut}>
          <SettingsName>Sair</SettingsName>
        </Settings>
      </SettingsWrapper>
    </Container>
  );
};

export default Profile;
