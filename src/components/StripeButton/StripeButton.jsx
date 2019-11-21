import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
   const stripePrice = price * 100;
   const publicKey = `pk_test_zz2Obdnm9X3Xk81921mHlSV2005ZrNGBxJ`;

   const onToken = token => {
      console.log(token);
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

export default StripeButton;
