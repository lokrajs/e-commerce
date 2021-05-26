import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => { 
    const priceForStripe = price*100;
    const pk = 'pk_test_51IvW2wGWbDWB6FztzWX16YkPYsfCM2GZ5d0n0j7PJrvGFszIUeacNRziMVP0adJDW5GPAKx2rDRuHjBawQoeV5Bs00TEtNLK9d';


const onToken = token => { 
    console.log(token);
    alert('Payment Successful!');
}

return (
    <StripeCheckout 
        label ='Pay Now'
        name= 'E-Commerce-lokrajs'
        billingAddress
        shippingAddress
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey= {pk}
    />
);
};

export default StripeCheckoutButton;