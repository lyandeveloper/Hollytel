import { Router } from 'express';

import BookingController from '../app/controllers/BookingController';

const booking = Router();

booking.post('/hotels/booking/:userId/:hotelId', BookingController.create);
booking.get('/mybookings/:userId', BookingController.listBookings);
booking.put('/mybookings/:bookingId', BookingController.update);

export default booking;
