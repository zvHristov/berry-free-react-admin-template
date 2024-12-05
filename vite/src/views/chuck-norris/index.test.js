import React from 'react';
//test auth login
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../store/reducer';
import JockPage from './index';
import { fetcher } from '../../utils/fetcher';

const store = createStore(reducer);
jest.mock('axios'); 

test('should fetch data successfully JockPage Page', async () => {
    //Arrange
    render(
        <MemoryRouter>
            <Provider store={store}>
                <JockPage />
            </Provider>
        </MemoryRouter>
    );
    //Act
    await act(async () => {
        axios.get.mockResolvedValueOnce('/jokes/random');
    });
  
});