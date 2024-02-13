import ReactDOM from 'react-dom/client';
import {Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
import App from './App';

root.render(
        // <Provider>
                <Suspense fallback={<div/>}>
                    <BrowserRouter basename={"/tickets"}>
                        <App/>
                    </BrowserRouter>

                </Suspense>
        // </Provider>
);

