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
				main: '#e17055'
			},
			secondary: {
				main: '#fdcb6e'
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
				main: '#b71540'
			},
			secondary: {
				main: '#4a69bd'
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
