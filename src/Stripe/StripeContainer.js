import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MH4toFrK2QAHGIazgORezLYe0tBF9i4yCDr7kfvxZ1PnyLSG6JiuSBOff0i3LgdYyI4YKUb0TEUEiW3HFnCfMGL00aH0LAJGD";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;