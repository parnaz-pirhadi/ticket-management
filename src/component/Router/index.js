import {Routes,Route} from "react-router-dom";
import routers from "./Constants/routers";

function Router(){
    return <Routes>{routers.map(({path, exact, component: Component, props = {}}) => (

        <Route
            key={path.replace(/\//g, "_")}
            path={path}
            exact={exact}
            element={<Component {...props} />}
        />
    ))
    }</Routes>;
}

export default Router;
