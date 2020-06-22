import React from 'react';
import {Grid, makeStyles, Paper, Button, Typography} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from 'react-router-dom';

export default function LoginOption() {
	const style = makeStyles((theme) => {
		return {
			paper: {
				padding: theme.spacing(2)
			},
			buttonParent: {
				'& Button': {
					margin: theme.spacing(1),
					width:"95%"
				}
			},
			icon:{
				margin: `0px ${theme.spacing(1)}px`
			},
			link:{
				width:"100%",
				textDecoration:"inherit"
			}
		};
	});
	const classes = style();
	return (
		<Grid container direction="column" alignItems="center"> 
			<Grid xs={10} md={5} container justify="center" alignItems="center" direction="column">
				<Grid container xs={8} justify="flex-start">
				<Typography style={{
					margin:"10px 0px"
				}}variant="h4">Login</Typography>
				</Grid>
				<Grid container xs={12} md={8}>
					<Grid item xs={12}>
					<Paper className={classes.paper} elevation={2}>
						<Grid  className={classes.buttonParent} container direction="column" >
							<Link className={classes.link} to="/student">
							<Button variant="outlined" color="primary" startIcon={<AccountCircleIcon/>}>
								Student
							</Button>
							</Link>
							<Link className={classes.link} to="/teacher">
							<Button variant="outlined" color="primary" startIcon={<PeopleIcon/>}>
								Teacher
							</Button>
							</Link>
							<Link className={classes.link} to="/admin">
							<Button variant="outlined" color="secondary" startIcon={<SupervisorAccountIcon/>}>
								Admin
							</Button>
							</Link>
						</Grid>
					</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
