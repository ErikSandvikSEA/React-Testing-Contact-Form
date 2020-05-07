import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});
//

//test that the forms are there
test('forms are present', () => {
     const { getByLabelText, getByTestId } = render(<ContactForm />)

     const firstNameInput = getByLabelText(/first name*/i)
     const lastNameInput = getByLabelText(/last name*/i)
     const emailInput = getByLabelText(/email*/i)
     const messageInput = getByLabelText(/message/i)
     const submitButton = getByTestId(/submit/i)


     expect(firstNameInput).toBeInTheDocument()
     expect(lastNameInput).toBeInTheDocument()
     expect(emailInput).toBeInTheDocument()
     expect(messageInput).toBeInTheDocument()
     expect(submitButton).toBeInTheDocument()


})

// test that the forms can submit
test('forms can receive input', () => {
     const { getByLabelText, getByDisplayValue, getByTestId } = render(<ContactForm />)

     const firstNameInput = getByLabelText(/first name*/i)
     const lastNameInput = getByLabelText(/last name*/i)
     const emailInput = getByLabelText(/email*/i)
     const messageInput = getByLabelText(/message/i)
     const submitButton = getByTestId('submitButton')

     fireEvent.change(firstNameInput, { target: { value: 'Erik' } })
     fireEvent.change(lastNameInput, { target: { value: 'Sandvik' } })
     fireEvent.change(emailInput, { target: { value: 'hello@hello.com' } })
     fireEvent.change(messageInput, { target: { value: `Here is the tester message`}})          
     fireEvent.click(submitButton)

     // also test that the new object exists
     const messageText = getByDisplayValue(/here is the tester message/i)
     expect(messageText).toBeInTheDocument()
    

})

//test for error messages to appear after blur
test('error messages appear when textField is blurred', () => {
     const { getByLabelText, getByText, queryByText ,getByTestId } = render(<ContactForm />)

     const firstNameInput = getByLabelText(/first name*/i)
     const lastNameInput = getByLabelText(/last name*/i)
     const emailInput = getByLabelText(/email*/i)
     const messageInput = getByLabelText(/message/i)
     const submitButton = getByTestId('submitButton')

     fireEvent.click(emailInput)
     setTimeout(1000, () => {
          fireEvent.click(lastNameInput)
     })
     setTimeout(1500, () => {
          const emailError = getByText(/Looks like there was an error: required/i)
          expect(emailError).toBeInTheDocument()
     })
     fireEvent.change(firstNameInput, { target: { value: 'aaaaaa' } })
     fireEvent.click(submitButton)
     setTimeout(1000, () => {
          const firstNameError = getByText(/Looks like there was an error: maxLength/i)
          expect(firstNameError).toBeInTheDocument()
     })

     fireEvent.change(lastNameInput, { target: { value: 'Sandvik'} })
     expect(queryByText(/Looks like there was an error: required/i)).not.toBeInTheDocument()

})