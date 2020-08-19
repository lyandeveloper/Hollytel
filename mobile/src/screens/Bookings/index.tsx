import React from 'react';

import { Container, BookingTitle } from './styles';
import Hotel from '../../components/BookingHotel';

const Bookings: React.FC = () => {
  return (
    <Container>
      <BookingTitle>Agendamentos</BookingTitle>
      <Hotel
        img="https://cdn.wallpaper.com/main/2018/06/owall-hotel-1.jpg"
        name="Waldorf Astoria"
        location="São Paulo, Brasil"
        score="4.5"
        price="430"
      />
    </Container>
  );
};

export default Bookings;
