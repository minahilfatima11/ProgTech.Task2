import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders To-Do List header', () => {
  render(<App />);
  const headerElement = screen.getByText(/To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});

test('adds a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add Task/i);
  
  fireEvent.change(inputElement, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
  
});
