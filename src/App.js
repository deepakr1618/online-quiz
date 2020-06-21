import React, {useReducer} from 'react';
import './App.css';
import Navigation from './components/navigation';
import LoginOption from './components/loginOption';

function App() {
	return (
		<div className="App">
			<Navigation />
			<LoginOption />
		</div>
	);
}

export default App;
