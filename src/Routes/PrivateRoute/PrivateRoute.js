import React, {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Spinner animation="border" variant="danger" />
    }
    if (!user) {
        return <Navigate to='/login' state={{ form: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;