export const setValueInLocalStorage = (data) => {
    localStorage.setItem('tickets', JSON.stringify(data));
};

export const getValueFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("tickets"));
};


export default {setValueInLocalStorage, getValueFromLocalStorage};
