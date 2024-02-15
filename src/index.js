import ReactDOM from 'react-dom/client';
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<div/>}>
        <BrowserRouter basename={"/tickets"}>
            <App/>
        </BrowserRouter>

    </Suspense>
);

