import React from 'react';

import {
  Container,
  Logo,
  CoverWrap,
  CoverImg,
  Overlay,
  Form,
  Fieldset,
  InputField,
  ButtonSubmit,
  ButtonText,
  ButtonSecondary,
  ButtonTxtSecondary,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <CoverWrap />
      <Overlay />
      <Logo source={require('../../assets/logo.png')} />
      <CoverImg
        source={{
          uri:
            'https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-1.2.1&w=1000&q=80',
        }}
      />
      <CoverWrap />

      <Form>
        <Fieldset>Login</Fieldset>
        <InputField
          placeholder="Nome de usuário ou email"
          keyboardType="email-address"
        />
        <InputField placeholder="Senha" />
        <ButtonSubmit>
          <ButtonText>Entrar</ButtonText>
        </ButtonSubmit>
        <ButtonSecondary>
          <ButtonTxtSecondary>Já tenho uma conta</ButtonTxtSecondary>
        </ButtonSecondary>
      </Form>
    </Container>
  );
};

export default Login;
