import React, {useContext, useState} from 'react';
import {AppContext} from '../state/context';
import {Grid, Typography, makeStyles, Paper} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

export default function Navigation() {
	const useStyle = makeStyles((theme) => {
		return {
			navContainer: {
				padding: theme.spacing(2)
			},
			themeToggler: {
				padding: theme.spacing(0.5)
			}
		};
	});
	const classes = useStyle();
	const [state, dispatch] = useContext(AppContext);
	const [darkTheme, setDarkTheme] = useState(false);

	function toggleTheme() {
		setDarkTheme(!darkTheme);
		dispatch({
			type: 'TOGGLE_THEME'
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
				<Typography>Online Examination</Typography>
				<Paper className={classes.themeToggler} elevation={5}>
					<Grid container direction="row" alignItems="center" justify="center">
						<Grid item>
							<Brightness4Icon></Brightness4Icon>
						</Grid>
						<Grid item>
							<Switch checked={darkTheme} onChange={toggleTheme}></Switch>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
}
