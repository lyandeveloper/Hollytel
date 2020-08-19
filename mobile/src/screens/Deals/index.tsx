import React from 'react';
import Hotel from '../../components/Hotel';

import { Container, DealTitle } from './styles';

const Deals: React.FC = () => {
  return (
    <Container>
      <DealTitle>Ofertas</DealTitle>
      <Hotel
        img="https://cdn.wallpaper.com/main/2018/06/owall-hotel-1.jpg"
        name="Waldorf Astoria"
        location="São Paulo, Brasil"
        price="$430/noite"
      />

      <Hotel
        img="https://www.ahstatic.com/photos/b361_ho_00_p_1024x768.jpg"
        name="Paseo Del Prado"
        location="Studio City, Los Angeles"
        price="$610/noite"
      />

      <Hotel
        img="https://images8.alphacoders.com/812/812133.jpg"
        name="The Rita Suites"
        location="Las Vegas Strip, Las Vegas"
        price="$700/noite"
      />
    </Container>
  );
};

export default Deals;
