import React, {use, useContext} from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function ProtectedRoutes({children}){
    const {user, loading }=useContext(AuthContext);
    console.log("ProtectedRoute - user:", user);

    // If user not logged in, redirect to /login
    if(loading){
        return <div style={{ textAlign: "center", marginTop: "100px"}}>Loading...</div>
    }
    if(!user){
        return <Navigate to='/login'/>
    }

    // Else show the protected component
    return children;

}

export default ProtectedRoutes; 