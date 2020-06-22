import React from 'react';
import AdminLogin from '../../components/adminLogin/adminLogin';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

function AdminPage() {
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <SupervisorAccountIcon fontSize="large" />
            <h1>Admin Login</h1>
            </div>
            <AdminLogin />
        </div>
    )
}

export default AdminPage;
