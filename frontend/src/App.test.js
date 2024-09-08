// frontend/src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the App component and submits form', async () => {
  render(<App />);
  // Check if the input field is present
  const inputElement = screen.getByPlaceholderText('Enter your name v3');
  expect(inputElement).toBeInTheDocument();
  // Simulate user typing
  fireEvent.change(inputElement, { target: { value: 'Guan' } });
  expect(inputElement.value).toBe('Guan');

  // Simulate form submission
  const buttonElement = screen.getByText('Testv3');
  fireEvent.click(buttonElement);

  // Wait for async operations to complete and check the response message
  const messageElement = await screen.findByText(/an error occurred/i);
  expect(messageElement).toBeInTheDocument();
});
