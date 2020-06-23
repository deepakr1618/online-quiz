import React, {useContext, useState, useEffect} from 'react';
import {AppContext} from '../../../state/context';
import {Grid, Select, MenuItem, makeStyles, Paper, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TeacherOption() {
	const [state, dispatch] = useContext(AppContext);
	const [option, setOption] = useState('None');
	const [disabledButton, setDisableButton] = useState(false);

	const style = makeStyles((theme) => ({
		select: {
			margin: theme.spacing(2)
		},
		button: {
			margin: theme.spacing(2)
		}
	}));

	const classes = style();
	useEffect(() => {
		if (option === 'None') {
			setDisableButton(true);
		} else {
			setDisableButton(false);
		}
	}, [option]);
	function handleChange(e) {
		setOption(e.target.value);
	}
	return (
		<div>
			<h1>Welcome {state.user.name}</h1>
			<Grid container justify="center">
				<Grid item xs={12} sm={8} md={6}>
					<Paper>
						<Grid container direction="row" justify="center" alignItems="center">
							<Grid item xs={12} sm={6}>
								<h3>Select a course</h3>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Select
									className={classes.select}
									label="Select a course"
									value={option}
									onChange={handleChange}
								>
									<MenuItem value="None">None</MenuItem>
									{state.user.courses.map((course, i) => (
										<MenuItem key={i} value={course.name}>
											{course.name}
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid container justify="center">
							<Grid item xs={12} sm={6}>
								<Button
									className={classes.button}
									color="secondary"
									variant="contained"
									disabled={disabledButton}
								>
									Add Question
								</Button>
							</Grid>
							<Grid item xs={12} sm={6}>
								<Button
									className={classes.button}
									color="primary"
									variant="contained"
									startIcon={<DeleteIcon />}
									disabled={disabledButton}
								>
									Delete Question
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
