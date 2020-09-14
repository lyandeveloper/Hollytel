import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

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

import accountContext from '../../contexts/account';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleAccount } = useContext(accountContext);

  function createAccount() {
    handleAccount(email, password);
    navigation.navigate('Continue');
  }
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
          onChangeText={(email) => setEmail(email)}
          defaultValue={email}
        />
        <InputField
          placeholder="Senha"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          defaultValue={password}
        />
        <ButtonSubmit onPress={createAccount}>
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
