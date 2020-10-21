import React, { useContext, useEffect, useState } from 'react';
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
import api from '../../services/api';

interface IHotel {
  id: number;
  name: string;
  city: string;
  country: string;
  address: string;
  price: string;
  banner01: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const [hotels, setHotels] = useState<IHotel[]>([]);

  useEffect(() => {
    async function loadHotels() {
      const response = await api.get('/hotels/list');
      setHotels(response.data);
    }

    loadHotels();
  }, []);

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
              uri: `http://192.168.0.112:3333/uploads/${user.avatar}`,
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
        {hotels.map((hotel) => (
          <Hotel
            key={hotel.id}
            id={hotel.id}
            img={`http://192.168.0.112:3333/uploads/${hotel.banner01}`}
            name={hotel.name}
            location={`${hotel.city}, ${hotel.address}, ${hotel.country}`}
            price={`$${hotel.price}/noite`}
          />
        ))}
      </ExploreHotels>
    </Container>
  );
};

export default Home;
