import React from "react";
import {useLocation, useParams} from "react-router-dom";

// wrapper to use React router's v6 hooks in class component(to use HOC pattern, like in router v5)
export function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        //let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}