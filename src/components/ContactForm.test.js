import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});
//

//test that the forms are there
test('forms are present', () => {
     const { getByText } = render(<ContactForm />)

     const firstNameInput = getByText(/first name*/i)
     const lastNameInput = getByText(/last name*/i)
     const emailInput = getByText(/email*/i)
     const messageInput = getByText(/message/i)

     expect(firstNameInput).toBeInTheDocument()
     expect(lastNameInput).toBeInTheDocument()
     expect(emailInput).toBeInTheDocument()
     expect(messageInput).toBeInTheDocument()

})

//test that the forms can submit
