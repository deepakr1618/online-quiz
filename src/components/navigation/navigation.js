import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppContext} from '../../state/context';
import {Grid, Typography, makeStyles} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import IconButton from '@material-ui/core/IconButton';
import Brightness3Icon from '@material-ui/icons/Brightness3';

export default function Navigation() {
	const useStyle = makeStyles((theme) => {
		return {
			navContainer: {
				padding: theme.spacing(2)
			},
			themeToggler: {
				padding: theme.spacing(0.5)
			},
			link:{
				textDecoration:"inherit",
				color:"inherit"
			}
		};
	});
	const classes = useStyle();
	const [state, dispatch] = useContext(AppContext);
	const [theme, setTheme] = useState(state.theme.type);

	function toggleTheme() {
		setTheme(theme==="light"?"dark":"light");
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
				<Grid item xs={10}>
					<Grid style={{height:"100%"}} container justify="flex-start" alignItems="center">
					<Link to="/" className={classes.link}><Typography>Code Online</Typography></Link>
					</Grid>
				</Grid>
				<Grid item xs={2} >
					<Grid container direction="row" alignItems="center" justify="center">
					<Grid item>
							{
								theme==="dark"?<IconButton onClick={toggleTheme}><Brightness4Icon/></IconButton>:null
							}{/*Sun icon*/}
							{
								theme==="light"?<IconButton onClick={toggleTheme}><Brightness3Icon/></IconButton>:null
							}{/*Moon icon*/}
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
