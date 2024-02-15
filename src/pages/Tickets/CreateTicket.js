import React, {useState} from "react";
import {useMutation} from "react-query";
import axiosInstance from "../../api/axiosInstance";
import {useForm} from "react-hook-form";
import {Button, Form, Input, Span} from "./Styles";

const CreateTicket = ({handleFetchData, tickets}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value)
    }

    const saveDataMutation = useMutation((data) => axiosInstance.post('/api/saveTicket', data), {
        onSuccess: () => {
            handleFetchData().then()
            clearForm();
        }
    });

    const handleSaveTicket = async () => {
        try {
            const data = {
                id: tickets.length > 0 ? tickets[tickets.length - 1].id + 1 : 1,
                title: title,
                description: description,
                status: "pending",
                creationTime: new Date()
            };
            saveDataMutation.mutate(data);
        } catch (error) {
            console.error('Error saving ticket:', error);
        }
    };

    const clearForm = () => {
        setTitle("");
        setDescription("");
    }

    return (
        <Form onSubmit={handleSubmit(handleSaveTicket)}>
            <Span>title</Span>
            <Input value={title} {...register('title', {onChange: handleChange(setTitle), required: true})} />
            {errors.title && <p>title is required.</p>}
            <Span>description</Span>
            <Input value={description} {...register('description', {
                onChange: handleChange(setDescription),
                required: true
            })} />
            {errors.description && <p>description is required.</p>}
            <Button type="submit">create ticket</Button>
        </Form>
    )
}

export default CreateTicket
