import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});
//

//test that the forms are there
test('forms are present', () => {
     const { getByText, getByLabelText } = render(<ContactForm />)

     const firstNameInput = getByLabelText(/first name*/i)
     const lastNameInput = getByLabelText(/last name*/i)
     const emailInput = getByLabelText(/email*/i)
     const messageInput = getByLabelText(/message/i)

     expect(firstNameInput).toBeInTheDocument()
     expect(lastNameInput).toBeInTheDocument()
     expect(emailInput).toBeInTheDocument()
     expect(messageInput).toBeInTheDocument()

})

//test that the forms can submit
// test('forms are present', () => {
//      const { getByText } = render(<ContactForm />)

//      const firstNameInput = getByText(/first name*/i)
//      const lastNameInput = getByText(/last name*/i)
//      const emailInput = getByText(/email*/i)
//      const messageInput = getByText(/message/i)
//      const submit = getByText()

// })