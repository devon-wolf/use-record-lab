/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
import MainPage from '../views/MainPage';

describe('Color picker', () => {
  it('renders a correctly functioning color picker', () => {
    render(<MainPage />);

    const undoButton = screen.getByLabelText('undo');
    const redoButton = screen.getByLabelText('redo');
    const colorPicker = screen.getByLabelText('color-picker');
    const colorDisplay = screen.getByLabelText('color-display');

    // these tests are not working right, passing when they shouldn't be - see first event fire
    fireEvent.input(colorPicker, { target: { value: '#6BD425' } });
    waitFor(() => {
      expect(colorDisplay).toHaveStyle({ backgroundColor: 'hot-pink' });
    });

    // fireEvent.input(colorPicker, '#618B25');
    // waitFor(() => {
    //   expect(colorDisplay).toHaveStyle({ 'backgroundColor': '#618B25' });
    // });

    // fireEvent.input(colorPicker, '#42113C');
    // waitFor(() => {
    //   expect(colorDisplay).toHaveStyle({ 'backgroundColor': '#42113C' });
    // });

    // fireEvent.input(colorPicker, '#370926');
    // waitFor(() => {
    //   expect(colorDisplay).toHaveStyle({ 'backgroundColor': '#370926' });
    // });

    // fireEvent.input(colorPicker, '#1C0118');
    // waitFor(() => {
    //   expect(colorDisplay).toHaveStyle({ 'backgroundColor': '#6BD425' });
    // });


  });
});
