import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../AdminLayout/AdminLayout';
import { useSelector } from 'react-redux';

function Protected() {
    const [tokenState, setTokenState] = useState(false);



    const user = useSelector((state)=> state.adminAuthReducer )
  
    useEffect(() => {
        // Check token here (retrieve from local storage or elsewhere)
        const token = localStorage.getItem('token') ? true : false;

        setTokenState(token);

       
    }, [user]); // Empty dependency array for one-time check

    console.log(tokenState, 'tokenstate outside useEffect');

    return (
        <div>
            {user.isLogged ? <AdminLayout /> : <Navigate to="/admin-login" replace={true} />}
        </div>
    );
}

export default Protected;
