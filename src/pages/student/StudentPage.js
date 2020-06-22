import React from 'react';
import StudentLogin from '../../components/studentLogin/studentLogin';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function StudentPage() {
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <AccountCircleIcon fontSize="large" />
            <h1>Student Login</h1>
            </div>
            <StudentLogin></StudentLogin>
        </div>
    )
}

export default StudentPage;
