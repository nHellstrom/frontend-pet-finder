
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Wanting from "../../Pages/Wanting/Wanting";
import LoginButton from "../Login/LoginButton";
import "./AuthRouter.css";

const PrivateRoute = () => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    if (isAuthenticated) {
        return <Wanting />;
    } else {
        return (
            <div className="AuthRouter__container">
                <h2>Lost animals</h2><p>Please log in in order to see reports of sighted or found animals.</p><LoginButton /></div>);
    }
};

export default PrivateRoute;