import React from 'react';
import TeacherLogin from '../../components/teacherLogin/teacherLogin';
import PeopleIcon from '@material-ui/icons/People';

function TeacherPage() {
    return (
        <div>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <PeopleIcon fontSize="large" />
            <h1>Teacher Login</h1>
            </div>
            <TeacherLogin />
        </div>
    )
}

export default TeacherPage;
