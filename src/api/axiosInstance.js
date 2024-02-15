import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {getValueFromLocalStorage, setValueInLocalStorage} from "./useLocalStorage"

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

mock.onPost('/api/saveTicket').reply((config) => {
    const newTicket = JSON.parse(config.data);

    const existingData = getValueFromLocalStorage();
    const mergedData = [newTicket, ...existingData];
    setValueInLocalStorage(mergedData);
    return [200, newTicket];
});

mock.onPost('/api/updateTicket').reply((config) => {
    const {data} = JSON.parse(config.data);
    const id = data.id;

    const existingData = getValueFromLocalStorage();
    const mergedData = existingData.map(ticket => (ticket.id === id ? data : ticket));
    setValueInLocalStorage(mergedData);

    return [200, mergedData];
});


mock.onGet('/api/getTickets').reply((config) => {
    const id = config?.params?.id;
    const tickets = getValueFromLocalStorage();
    let data;
    if (id) {
        data = tickets.find(ticket => ticket.id === id);

    } else data = tickets || [];

    return [200, data];
});

export default axiosInstance;
