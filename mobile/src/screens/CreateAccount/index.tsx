import React from 'react';
import { View, Alert } from 'react-native';

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

const CreateAccount: React.FC = () => {
  async function handleSubmit() {
    Alert.alert('Sucesso', 'Conta criada! Faça Login.');
  }
  return (
    <Container>
      <Title>Complete seu perfil</Title>
      <AvatarWrapper>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
          }}
        />
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
