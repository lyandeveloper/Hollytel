import React, { useState, useContext } from 'react';
import { View, Alert } from 'react-native';
import ImagePicker, { Image } from 'react-native-image-crop-picker';
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
import RNFetchBlob from 'rn-fetch-blob';
import { useNavigation } from '@react-navigation/native';

const CreateAccount: React.FC = () => {
  const [avatar, setAvatar] = useState<Image>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [born, setBorn] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [provider, setProvider] = useState(false);
  const { email, password } = useContext(accountContext);

  const navigation = useNavigation();

  function handleSubmit() {
    RNFetchBlob.fetch(
      'POST',
      'http://192.168.0.112:3333/users/create',
      {
        // this is required, otherwise it won't be process as a multipart/form-data request
        'Content-Type': 'multipart/form-data',
      },
      [
        // append field data from file path
        {
          name: 'avatar',
          filename: 'avatar.jpg',
          type: avatar.mime,
          data: avatar.data,
        },
        // elements without property `filename` will be sent as plain text
        { name: 'email', data: String(email) },
        { name: 'password', data: String(password) },
        { name: 'name', data: String(name) },
        { name: 'phone', data: String(phone) },
        { name: 'born', data: String(born) },
        { name: 'city', data: String(city) },
        { name: 'address', data: String(address) },
        { name: 'country', data: String(country) },
        { name: 'provider', data: String(provider) },
      ],
    )
      .then((resp) => {
        Alert.alert('Sucesso!', 'Conta criada, faça login em sua conta.');
        navigation.navigate('Login');
      })
      .catch((err) => {
        Alert.alert('Erro!', 'Algo deu errado.');
      });
  }

  async function handleAvatar() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
      mediaType: 'photo',
    }).then((image) => {
      setAvatar(image);
    });
  }
  return (
    <Container>
      <Title>Complete seu perfil</Title>
      <AvatarWrapper onPress={handleAvatar}>
        <Avatar source={{ uri: `${avatar.path}` }} />
      </AvatarWrapper>

      <Form>
        <InputText
          placeholder="Nome Completo"
          onChangeText={(name) => setName(name)}
          defaultValue={name}
        />
        <InputText
          placeholder="Telefone"
          onChangeText={(phone) => setPhone(phone)}
          defaultValue={phone}
        />
        <InputText
          placeholder="Data de Nascimento"
          onChangeText={(born) => setBorn(born)}
          defaultValue={born}
        />
        <InputText
          placeholder="Cidade"
          onChangeText={(city) => setCity(city)}
          defaultValue={city}
        />
        <InputText
          placeholder="Endereço"
          onChangeText={(address) => setAddress(address)}
          defaultValue={address}
        />
        <InputText
          placeholder="País"
          onChangeText={(country) => setCountry(country)}
          defaultValue={country}
        />
        <ButtonSubmit onPress={handleSubmit}>
          <ButtonTxt>Concluir</ButtonTxt>
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default CreateAccount;
