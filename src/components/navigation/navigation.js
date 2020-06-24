import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../../state/context';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default function Navigation() {
	const [state, dispatch] = useContext(AppContext);
	const useStyle = makeStyles((theme) => {
		return {
			navContainer: {
				padding: theme.spacing(2)
			},
			themeToggler: {
				padding: theme.spacing(0.5)
			},
			link: {
				textDecoration: 'inherit',
				color: 'inherit'
			},
			navHeading:{
				padding:theme.spacing(1),
				borderRadius:"7px",
				background:state.theme.type==="light"?"#eee":"#333"
			}
		}
	});
	const classes = useStyle();
	const [theme, setTheme] = useState(state.theme.type);

	async function toggleTheme() {
		await setTheme(theme === 'light' ? 'dark' : 'light');
		await dispatch({
			type: 'TOGGLE_THEME'
		});
		console.log(state.theme.type);
		await dispatch({
			type: 'ADD_TOASTR',
			payload: {
				message: `${state.theme.type === 'light' ? 'Dark' : 'Light'} mode enabled!`,
				severity: 'info'
			}
		});
	}

	return (
		<div>
			<Grid
				className={classes.navContainer}
				container
				direction="row"
				alignContent="center"
				justify="space-between"
			>
				<Grid item xs={5}>
					<Grid style={{height: '100%'}} container justify="flex-start" alignItems="center">
						<Link to="/" className={classes.link}>
							<Typography variant="h5" className={classes.navHeading}>Code Online</Typography>
						</Link>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Grid container style={{height:"100%"}} alignItems="center">
					{
					state.user.name ? 
					<Typography>Welcome {state.user.name}</Typography>
					:null
					}
					</Grid>
				</Grid>
				<Grid item xs={1}>
					<Grid container direction="row" alignItems="center" justify="center">
						<Grid item>
							{theme === 'dark' ? (
								<IconButton onClick={toggleTheme}>
									<Brightness4Icon />
								</IconButton>
							) : null}
							{/*Sun icon*/}
							{theme === 'light' ? (
								<IconButton onClick={toggleTheme}>
									<Brightness3Icon />
								</IconButton>
							) : null}
							{/*Moon icon*/}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
