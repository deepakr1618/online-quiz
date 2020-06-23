import React, {useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider, createMuiTheme, CssBaseline} from '@material-ui/core';
import {AppProvider} from './state/context';
import {initialState, reducer} from './state/reducer';
import Toastr from './components/toastr/toastr';

const RootComponent = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const darkPalette = createMuiTheme({
		palette: {
			type: state.theme.type,
			primary: {
				main: '#ff7045'
			},
			secondary: {
				main: '#04d427'
			}
		},
		typography: {
			fontFamily: "'Poppins', sans-serif"
		}
	});
	const lightPalette = createMuiTheme({
		palette: {
			type: state.theme.type,
			primary: {
				main: '#ff294d'
			},
			secondary: {
				main: '#2990ff'
			}
		},
		typography: {
			fontFamily: "'Poppins', sans-serif"
		}
	});
	return (
		<AppProvider value={[state, dispatch]}>
			<ThemeProvider theme={state.theme.type === 'dark' ? darkPalette : lightPalette}>
				<CssBaseline />
				<App />
				<Toastr />
			</ThemeProvider>
		</AppProvider>
	);
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
