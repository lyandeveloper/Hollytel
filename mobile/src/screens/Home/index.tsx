import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import Hotel from '../../components/Hotel';
import PopularHotel from '../../components/PopularHotel';
import {
  Container,
  Profile,
  ProfileHeader,
  UserName,
  ProfileCall,
  ProfileAvatar,
  ProfileImg,
  SearchInput,
  Session,
  PopularHotels,
  ExploreHotels,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Profile>
        <ProfileHeader>
          <UserName>{`Olá, ${user.name}`}</UserName>
          <ProfileCall>Onde você gostaria de ir?</ProfileCall>

          <SearchInput placeholder="Pesquisar" />
        </ProfileHeader>
        <ProfileAvatar onPress={() => navigation.navigate('Profile')}>
          <ProfileImg
            source={{
              uri: `https://api.adorable.io/avatars/285/${user.name}.png`,
            }}
          />
        </ProfileAvatar>
      </Profile>

      <Session>Mais Populares</Session>

      <PopularHotels>
        <PopularHotel
          img="https://i.pinimg.com/originals/c4/a2/bb/c4a2bb947031c0015499a9d97de47728.jpg"
          name="Domaine de Mialaret"
          location="Route d'Egletons, França"
          score="4.5"
        />

        <PopularHotel
          img="https://www.crismatec.com/python/be/best-swimming-pools-on-maui-travel-leisure_home-elements-and-style.jpg"
          name="Tryp Habana Libre"
          location="Havana, Cuba"
          score="4.3"
        />

        <PopularHotel
          img="https://wallscapeinc.com/wp-content/uploads/2017/04/luxury_hotel_room-wallpaper-2560x1440.jpg"
          name="El Royale Gardens"
          location="Culver City, Los Angeles"
          score="4.6"
        />
      </PopularHotels>

      <Session>Explorar</Session>

      <ExploreHotels>
        <Hotel
          onPress={() => navigation.navigate('Hotel')}
          img="https://images8.alphacoders.com/812/812133.jpg"
          name="The Rita Suites"
          location="Las Vegas Strip, Las Vegas"
          price="$700/noite"
        />

        <Hotel
          img="https://www.ahstatic.com/photos/b361_ho_00_p_1024x768.jpg"
          name="Paseo Del Prado"
          location="Studio City, Los Angeles"
          price="$610/noite"
        />

        <Hotel
          img="https://cdn.wallpaper.com/main/2018/06/owall-hotel-1.jpg"
          name="Waldorf Astoria"
          location="São Paulo, Brasil"
          price="$430/noite"
        />
      </ExploreHotels>
    </Container>
  );
};

export default Home;
