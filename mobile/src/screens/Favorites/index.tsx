import React from 'react';
import Hotel from '../../components/Hotel';
import { Container, FavoriteTitle } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <FavoriteTitle>Favoritos</FavoriteTitle>
      <Hotel
        img="https://i.pinimg.com/originals/c4/a2/bb/c4a2bb947031c0015499a9d97de47728.jpg"
        name="Domaine de Mialaret"
        location="Route d'Egletons, França"
        price="$610/noite"
        favorite={true}
      />

      <Hotel
        img="https://www.crismatec.com/python/be/best-swimming-pools-on-maui-travel-leisure_home-elements-and-style.jpg"
        name="Tryp Habana Libre"
        location="Havana, Cuba"
        price="$580/noite"
        favorite={true}
      />

      <Hotel
        img="https://wallscapeinc.com/wp-content/uploads/2017/04/luxury_hotel_room-wallpaper-2560x1440.jpg"
        name="El Royale Gardens"
        location="Culver City, Los Angeles"
        price="$460/noite"
        favorite={true}
      />
    </Container>
  );
};

export default Favorites;
