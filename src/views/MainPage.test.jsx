/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
import MainPage from '../views/MainPage';

describe('Color picker', () => {
  it('renders a correctly functioning color picker', () => {
    render(<MainPage />);

    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    fireEvent.change(colorPicker, { target: { value: '#6BD425' } });
    fireEvent.change(colorPicker, { target: { value: '#618B25' } });
    fireEvent.change(colorPicker, { target: { value: '#42113C' } });
    fireEvent.change(colorPicker, { target: { value: '#370926' } });
    
    return waitFor(() => {
      expect(colorDisplay).toHaveStyle({ 'background-color': '#370926' });
    });
  });

  it('goes backward on undo', () => {
    render(<MainPage />);

    const undoButton = screen.getByLabelText('undo');
    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    fireEvent.change(colorPicker, { target: { value: '#6BD425' } });
    fireEvent.change(colorPicker, { target: { value: '#618B25' } });
    fireEvent.change(colorPicker, { target: { value: '#42113C' } });

    fireEvent.click(undoButton);

    return waitFor(() => {
      expect(colorDisplay).toHaveStyle({ 'background-color': '#618B25' });
    });
  });

  it('goes forward on redo', () => {
    render(<MainPage />);
    
    const undoButton = screen.getByLabelText('undo');
    const redoButton = screen.getByLabelText('redo');
    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    fireEvent.change(colorPicker, { target: { value: '#6BD425' } });
    fireEvent.change(colorPicker, { target: { value: '#618B25' } });
    fireEvent.change(colorPicker, { target: { value: '#42113C' } });

    fireEvent.click(undoButton);
    fireEvent.click(undoButton);
    fireEvent.click(redoButton);

    return waitFor(() => {
      expect(colorDisplay).toHaveStyle({ 'background-color': '#618B25' });
    });
  });

  it('inserts a new color at the current position of the history/record', () => {
    render(<MainPage />);
    
    const undoButton = screen.getByLabelText('undo');
    const redoButton = screen.getByLabelText('redo');
    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    fireEvent.change(colorPicker, { target: { value: '#6BD425' } });
    fireEvent.change(colorPicker, { target: { value: '#618B25' } });
    fireEvent.change(colorPicker, { target: { value: '#42113C' } });

    fireEvent.click(undoButton);
    fireEvent.click(undoButton);

    fireEvent.change(colorPicker, { target: { value: '#FFFFFF ' } });
    
    fireEvent.click(undoButton);
    fireEvent.click(redoButton);
    fireEvent.click(redoButton);

    return waitFor(() => {
      expect(colorDisplay).toHaveStyle({ 'background-color': '#618B25' });
    });

  });
});
