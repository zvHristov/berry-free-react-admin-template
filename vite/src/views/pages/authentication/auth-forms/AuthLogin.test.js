import React from 'react';
//test auth login
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../../../store/reducer';
import AuthLogin from './AuthLogin';

const store = createStore(reducer);

beforeAll(() => {
    global.alert = jest.fn(); // Mock Alert window.alert
    global.localStorage = {
        setItem: jest.fn(), // Mock localStorage.setItem
        getItem: jest.fn(),
        removeItem: jest.fn(),
        clear: jest.fn(),
        store: {},
    };
});
 // Clear mocks before each test
 beforeEach(() => {
    jest.clearAllMocks();
  });
describe('Login', () => {
    test('should render login form', async () => {
        //Arrange
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AuthLogin />
                </Provider>
            </MemoryRouter>
        );
        //Act
        const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
        const passwordInput = screen.getByLabelText('Password');

        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'dededede' } });
        });
        //Assert
        await waitFor(async () => {
            expect(usernameInput.value).toBe('test@example.com');
            expect(passwordInput.value).toBe('dededede');
        });
    });
});
describe('Login Authentication navigation', () => {
    test('should not submit login form with invalid credentials', async () => {

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AuthLogin />
                </Provider>
            </MemoryRouter>
        );

        const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByTestId('submit-login-button');
 
        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(submitButton); 
        });

        await waitFor(async () => {
            expect(global.alert).toHaveBeenCalledWith('Invalid username or password');
        });

    });

    test('should submit login form with valid credentials', async () => {

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AuthLogin />
                </Provider>
            </MemoryRouter>
        );

        const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByTestId('submit-login-button');
    
        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: 'admin@admin.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(submitButton); 
        });
       
        await waitFor( async () => {
            expect(global.alert).not.toHaveBeenCalled();
        });
      
    });
});
describe('Login Authentication', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      })
    test('should not submit login form with invalid credentials', async () => {

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AuthLogin />
                </Provider>
            </MemoryRouter>
        );

        const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByTestId('submit-login-button');
 
        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(submitButton); 
        });

        await waitFor(async () => {
            expect(global.alert).toHaveBeenCalledWith('Invalid username or password');
        });

    });

    test('should submit login form with valid credentials', async () => {

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <AuthLogin />
                </Provider>
            </MemoryRouter>
        );

        const usernameInput = screen.getByRole('textbox', { name: /email address \/ username/i });
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByTestId('submit-login-button');
    
        await act(async () => {
            fireEvent.change(usernameInput, { target: { value: 'admin@admin.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password' } });
            fireEvent.click(submitButton); 
            global.localStorage.setItem('isAuthenticated', 'true')
        });
    });
});