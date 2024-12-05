const mockAxios = jest.createMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.interceptors = {
    request: {
        use: jest.fn(),
    },
    response: {
        use: jest.fn(),
    },
};

mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));
mockAxios.post = jest.fn(() => Promise.resolve({ data: {} }));

export default mockAxios;
