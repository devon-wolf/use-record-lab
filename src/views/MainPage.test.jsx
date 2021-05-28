import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MainPage from '../views/MainPage';

describe('Color picker', () => {
  it('renders a correctly functioning color picker', () => {
    render(<MainPage />);

    const undoButton = screen.getByText('undo');
    const redoButton = screen.getByText('redo');
    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    
  });
});
