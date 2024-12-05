import React from 'react';
//test auth login
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../../../store/reducer';
import AuthLogin from './AuthLogin';

const store = createStore(reducer);

test('render login form', async () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <AuthLogin />
            </Provider>
        </MemoryRouter>
    );

    const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getAllByRole('button', { name: /sign in/i });

    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    await act(async () => {
        fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
      });

    expect(usernameInput.value).toBe('test@example.com');
});

test('submit login form', async () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <AuthLogin />
            </Provider>
        </MemoryRouter>
    );

    const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getAllByRole('button', { name: /sign in/i });

    await act(async () => {
        fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
      });

    fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });


});