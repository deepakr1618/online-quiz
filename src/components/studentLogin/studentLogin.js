import React, {useContext} from 'react';
import {makeStyles, Paper, Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {AppContext} from '../../state/context';
const style = makeStyles((theme) => {
	return {
		paper: {
			padding: theme.spacing(3)
		},
		inputContainer: {},
		input: {
			margin: `${theme.spacing(2)}px 0px`
		}
	};
});

export default function StudentLogin() {
	const classes = style();
	const [state, dispatch] = useContext(AppContext);
	const [values, setValues] = React.useState({
		name: '',
		usn: '',
		section: ''
	});

	const handleChange = (event) => {
		const {id, value} = event.target;
		setValues((pres) => ({
			...pres,
			[id]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_TOASTR',
			payload: {
				message: `Welcome ${values.name}!`,
				severity: 'success'
			}
		});
	};

	return (
		<div>
			<Grid container className={classes.inputContainer} justify="center" alignItems="center" direction="column">
				<Grid item xs={12}>
					<Paper className={classes.paper} elevation={2}>
						<form onSubmit={handleSubmit}>
							<Grid container direction="column">
								<TextField
									className={classes.input}
									id="usn"
									label="USN"
									variant="outlined"
									onChange={handleChange}
								/>
								<TextField
									className={classes.input}
									id="name"
									label="Name"
									variant="outlined"
									onChange={handleChange}
								/>
								<TextField
									className={classes.input}
									id="section"
									label="Section"
									variant="outlined"
									onChange={handleChange}
								/>
								<Button
									type="submit"
									color="primary"
									onClick={handleSubmit}
									endIcon={<ArrowForwardIosIcon />}
								>
									Login
								</Button>
							</Grid>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
