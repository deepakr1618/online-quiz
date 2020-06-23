import React, {useContext} from 'react';
import TeacherLogin from '../../components/teacherLogin/teacherLogin';
import PeopleIcon from '@material-ui/icons/People';
import {AppContext} from '../../state/context';
import TeacherOption from '../../components/teacherComponents/teacherOptions/teacherOption';

function TeacherPage() {
	const [state, dispatch] = useContext(AppContext);
	return (
		<div>
			{!state.user.name || state.user.role !== 'TEACHER' ? (
				<React.Fragment>
					<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<PeopleIcon fontSize="large" />
						<h1>Teacher Login</h1>
					</div>{' '}
					<TeacherLogin />
				</React.Fragment>
			) : (
				<TeacherOption />
			)}
		</div>
	);
}

export default TeacherPage;
