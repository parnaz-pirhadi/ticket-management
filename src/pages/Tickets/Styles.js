import Styled from "styled-components";
import {InputAndButton, MarginBottom} from "../../component/SharedStyles";

export const Form = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;  
    width:20%; 
`;

export const Input = Styled.input` 
    ${InputAndButton};
`;
export const Span = Styled.span` 
    ${MarginBottom};
`;
export const Button = Styled.button` 
    ${InputAndButton}
`;
export const FlexContainer = Styled.div` 
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
`;
export const TicketCardContainer = Styled.div` 
    border:1px solid var(--text-color-light);
    min-width:200px;
    display:flex;
    flex-direction: column;
    padding:10px;
    border-radius:6px;
    ${MarginBottom};
`;




