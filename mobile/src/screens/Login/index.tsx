import React, { useState, useContext } from 'react';
import { StatusBar } from 'react-native';
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
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signed, signIn, user } = useContext(AuthContext);

  async function HandleSign() {
    signIn(email, password);
    console.log(user);
  }
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
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
          placeholder="Email"
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
        <ButtonSubmit onPress={HandleSign}>
          <ButtonText>Entrar</ButtonText>
        </ButtonSubmit>
        <ButtonSecondary onPress={() => navigation.navigate('SignUp')}>
          <ButtonTxtSecondary>Não tenho uma conta</ButtonTxtSecondary>
        </ButtonSecondary>
      </Form>
    </Container>
  );
};

export default Login;
