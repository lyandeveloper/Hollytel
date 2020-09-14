import React, { useState, useContext } from 'react';
import { View, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {
  Container,
  Title,
  AvatarWrapper,
  Avatar,
  Form,
  InputText,
  ButtonSubmit,
  ButtonTxt,
} from './styles';

import accountContext from '../../contexts/account';

const CreateAccount: React.FC = () => {
  const [avatar, setAvatar] = useState('');
  const { email, password } = useContext(accountContext);

  console.log({ email, password });
  async function handleSubmit() {
    Alert.alert('Sucesso', 'Conta criada! Faça Login.');
  }

  async function handleAvatar() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setAvatar(image.path);
    });
  }
  return (
    <Container>
      <Title>Complete seu perfil</Title>
      <AvatarWrapper onPress={handleAvatar}>
        <Avatar source={{ uri: `${avatar}` }} />
      </AvatarWrapper>

      <Form>
        <InputText placeholder="Nome Completo" />
        <InputText placeholder="Telefone" />
        <InputText placeholder="Data de Nascimento" />
        <InputText placeholder="Cidade" />
        <InputText placeholder="Endereço" />
        <InputText placeholder="País" />
        <ButtonSubmit onPress={handleSubmit}>
          <ButtonTxt>Concluir</ButtonTxt>
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default CreateAccount;
