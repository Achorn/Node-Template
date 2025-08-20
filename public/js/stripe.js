// eslint-disable-next-line no-undef
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  const stripe = Stripe(
    'pk_test_51Rw8kjRvG7889Jr7nXRZjnWpRQajW8429MZyjNQWtB5NZT3ysaj0JC2AOkb9gHBnWUiBWNmWNE8gTTkp1NbCRfFc00o4ekhKeW',
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout_session/${tourId}`);
    // 2) Create checkout form + charge credit card
    await stripe.redirectToCheckout({ sessionId: session.data.session.id });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
