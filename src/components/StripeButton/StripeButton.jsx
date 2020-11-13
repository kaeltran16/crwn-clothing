import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { emptyCart } from '../../redux/cart/cartActions';

const StripeButton = ({ price, history, emptyCart }) => {
   const stripePrice = price * 100;
   const publicKey = `pk_test_zz2Obdnm9X3Xk81921mHlSV2005ZrNGBxJ`;

   const onToken = token => {
      if (token) {
         emptyCart();
         history.push('/');
      }
   };
   return (
      <StripeCheckout label='Pay Now' name='Crwn Clothing' billingAdress
                      shippingAddress
                      image='https://sendeyo.com/up/d/f3eb2117da'
                      description={`Your total is ${price}`}
                      amount={stripePrice}
                      panelLabel='Pay Now'
                      token={onToken}
                      stripeKey={publicKey}
      />
   );
};

const mapDispatchToProps = dispatch => ({
   emptyCart: () => dispatch(emptyCart())
});

export default withRouter(connect(null, mapDispatchToProps)(StripeButton));
