import React, {useEffect, useState} from 'react';
import axiosInstance from "../../api/axiosInstance";
import CreateTicket from "./CreateTicket";
import List from "./List";

const Tickets = () => {

    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        handleFetchData().then(r => {
            setTickets(r !== null ? r : [])
        })
    }, [])


    const handleFetchData = async () => {
        const {data} = await axiosInstance.get('/api/getTickets');
        setTickets(data)
        return data;
    };


    return (
        <div>
            <h1>Tickets</h1>
            <CreateTicket
                handleFetchData={handleFetchData}
                tickets={tickets}/>
            <List tickets={tickets}/>

        </div>
    );
};

export default Tickets;
