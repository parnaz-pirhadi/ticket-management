import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import "./styles/App.scss";
import Router from "./component/Router";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router/>
        </QueryClientProvider>
    );
}

export default App;
