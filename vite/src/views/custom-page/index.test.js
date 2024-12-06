import React from 'react';
//test auth login
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../store/reducer';
import CustomPage from './index';

const store = createStore(reducer);

test('should render CustomPage Page', () => {
    //Arrange
    render(
        <MemoryRouter>
            <Provider store={store}>
                <CustomPage />
            </Provider>
        </MemoryRouter>
    );
    
    expect(screen.getByText('Custom Card')).toBeInTheDocument();
});