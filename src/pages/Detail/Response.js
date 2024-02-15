import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useMutation} from "react-query";
import {Button, Form, Input, Span} from "../Tickets/Styles";
import ConditionedComponent from "../../component/ConditionedComponent";
import axiosInstance from "../../api/axiosInstance";

const Response = ({details, handleFetchData}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [message, setMessage] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }
    const handleUpdateTicket = async () => {
        try {
            saveDataMutation.mutate({
                ...details,
                response: [...(details.response || []), {message}]
            });
        } catch (error) {
            console.error('Error saving ticket:', error);
        }
    };
    const handleCloseTicket = async () => {
        try {
            saveDataMutation.mutate({
                ...details,
                status: "close"
            });
        } catch (error) {
            console.error('Error saving ticket:', error);
        }
    };
    const saveDataMutation = useMutation((data) => axiosInstance.post('/api/updateTicket', {data}), {
        onSuccess: () => {
            handleFetchData().then()
            clearForm();
        }
    });
    const clearForm = () => {
        setMessage("");
    };


    return (
        <ConditionedComponent condition={details.status !== "close"}>
            <Form onSubmit={handleSubmit(handleUpdateTicket)}>
                <Span>add response</Span>
                <Input value={message} {...register('message', {
                    onChange: handleChange(setMessage),
                    required: true
                })} />
                {errors.message && <p>message is required.</p>}
                <Button type="submit">send</Button>
            </Form>
            <Button onClick={() => handleCloseTicket()}>close ticket</Button>
        </ConditionedComponent>
    )
}
export default Response
