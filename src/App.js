import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Homepage from './pages/home/HomePage';
import StudentPage from './pages/student/StudentPage';
import TeacherPage from './pages/teacher/TeacherPage';
import AdminPage from './pages/admin/AdminPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
			<Navigation />
			<Switch>
				<Route exact path="/" component= {Homepage} />
				<Route exact path="/teacher" component={TeacherPage} />
				<Route exct path="/student" component={StudentPage} />
				<Route exact path="/admin" component={AdminPage} />
			</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
