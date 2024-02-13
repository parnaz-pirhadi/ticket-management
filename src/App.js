import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Tickets from "./pages/Tickets";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>Ticket Management System</h1>
                <Tickets />
            </div>
        </QueryClientProvider>
    );
}

export default App;
