import React from "react";
import {useNavigate} from "react-router-dom";
import {FlexContainer, Span, TicketCardContainer} from "./Styles";

const List=({tickets})=>{
    const navigate = useNavigate();


    return(
        <FlexContainer>
            {tickets.map((item) => (
                <TicketCardContainer key={item.title}>
                    <Span>
                        id: {item.id}
                    </Span>
                   <Span>
                       title: {item.title}
                   </Span>
                    <Span>
                        description: {item.description}
                    </Span>
                    <Span>
                        status: {item.status}
                    </Span>
                    <div onClick={()=>navigate(`/${item.id}`)}>
                        detail
                    </div>

                </TicketCardContainer>
            ))}
        </FlexContainer>
    )
}

export default List;
