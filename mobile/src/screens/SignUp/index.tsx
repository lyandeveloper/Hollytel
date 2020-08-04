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

const SignUp: React.FC = ({ navigation }) => {
  return (
    <Container>
      <CoverWrap />
      <Overlay />
      <Logo source={require('../../assets/logo.png')} />
      <CoverImg
        source={{
          uri:
            'https://gizmodiva.com/wp-content/uploads/2017/10/SCOTT-A-WOODWARD_1SW1943-1170x689.jpg',
        }}
      />
      <CoverWrap />

      <Form>
        <Fieldset>Criar uma conta</Fieldset>
        <InputField
          placeholder="Nome de usuário ou email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <InputField
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <ButtonSubmit>
          <ButtonText>Criar Conta</ButtonText>
        </ButtonSubmit>
        <ButtonSecondary onPress={() => navigation.navigate('Login')}>
          <ButtonTxtSecondary>Já tenho uma conta</ButtonTxtSecondary>
        </ButtonSecondary>
      </Form>
    </Container>
  );
};

export default SignUp;
