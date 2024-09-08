// frontend/src/App.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
});
