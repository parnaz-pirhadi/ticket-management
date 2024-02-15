import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Span, TicketCardContainer} from "../Tickets/Styles";
import axiosInstance from "../../api/axiosInstance";
import ConditionedComponent from "../../component/ConditionedComponent";
import Response from "./Response";

const Detail = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        handleFetchData().then(r => {
            setDetails(r !== null ? r : [])
        })
    }, []);

    const handleFetchData = async () => {
        const {data} = await axiosInstance.get('/api/getTickets', {
            params: {
                id: parseInt(id)
            }
        });
        setDetails(data)
        return data;
    };

    return (
        <>
            <TicketCardContainer key={details.id}>
                <Span>
                    id: {details.id}
                </Span>
                <Span>
                    description: {details.description}
                </Span>
                <Span>
                    status: {details.status}
                </Span>
                response:
                {details.response?.map(res => {
                    return (
                        <TicketCardContainer>
                            <span>
                           message: {res.message}
                        </span>

                        </TicketCardContainer>
                    )
                })}

            </TicketCardContainer>
            <ConditionedComponent condition={details.status !== "close"}>
                <Response details={details} handleFetchData={handleFetchData}/>
            </ConditionedComponent>

        </>
    )
}
export default Detail
