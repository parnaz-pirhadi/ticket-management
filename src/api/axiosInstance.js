import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosInstance = axios.create();

export const mock = new MockAdapter(axiosInstance);

const savedData = [];

mock.onPost('/api/saveData').reply((config) => {
    const data = JSON.parse(config.data);
    savedData.push(data);
    return [200, { message: 'Data saved successfully' }];
});

mock.onGet('/api/getData').reply(200, savedData);

export default axiosInstance;
