import React, {FC} from "react";
import {Navigate} from "react-router-dom";
interface Props {
    children: React.ReactNode
}

const AuthNavigation:FC<Props> = ({children}) => {

    const checkAuth = () => {

        if(!localStorage.getItem('token')) {
            return <Navigate to={'/login'} />
        }

        return children;
    }

    return (
       <>
           {checkAuth()}
       </>
    )
}
export default AuthNavigation;