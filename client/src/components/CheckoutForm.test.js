import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/)
    expect(header).toBeInTheDocument();
});


test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    const elementButton = getByTestId(/buttonId/i);
    const leftClick = {button: 0}
    fireEvent.click(elementButton, leftClick);
    expect(getByTestId(/successmessage/i)).toBeInTheDocument();
});