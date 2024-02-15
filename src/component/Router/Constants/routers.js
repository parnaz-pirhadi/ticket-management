import React from "react";

const Tickets = React.lazy(() => import('../../../pages/Tickets/index'));
const Detail = React.lazy(() => import('../../../pages/Detail/index'));


const routers = [
    {
        path: "/",
        exact: true,
        component: Tickets,
    },
    {
        path: "/:id",
        exact: true,
        component: Detail,
    }
]
export default routers;
