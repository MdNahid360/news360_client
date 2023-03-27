import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import eft from '../../assets/99297-loading-files.gif';
const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    if(loader){
        return <div><img src={eft} alt="" className="" /></div>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivetRoute;