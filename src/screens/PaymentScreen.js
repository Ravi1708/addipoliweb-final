import React, { useState } from "react";
import { Form, Button, FormCheck, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FormContainer } from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import { CheckoutSteps } from "../components/CheckoutSteps";

export const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("online payment");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(setPaymentMethod);
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <Container>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>

        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <FormCheck
                type="radio"
                label="Online Payment"
                id="Online Payment"
                name="paymentMethod"
                value="Online Payment"
                style={{
                  margin: "20px",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></FormCheck>
              <FormCheck
                type="radio"
                label="Cash On Delivery"
                id="Cash On Delivery"
                name="paymentMethod"
                value="Cash On Delivery"
                style={{ margin: "20px" }}
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></FormCheck>
            </Col>
          </Form.Group>

          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};
