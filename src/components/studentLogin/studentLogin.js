import React from 'react'
import { makeStyles, Paper, Grid, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const style = makeStyles(theme=>{
    return({
        paper:{
            padding:theme.spacing(3)
        },
        inputContainer:{
        },
        input:{
            margin: `${theme.spacing(2)}px 0px`
        }
    })
})
export default function StudentLogin() {
    const classes = style()
    return (
        <div>
            <Grid container  className={classes.inputContainer} justify="center" alignItems="center" direction="column">
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
                <Grid  container direction="column">
                <TextField className={classes.input} label="USN" variant="outlined" />
                <TextField className={classes.input} label="Name" variant="outlined" />
                <TextField className={classes.input} label="Section" variant="outlined" />
                <Button color="primary" endIcon={<ArrowForwardIosIcon/>}>Login</Button>
                </Grid>
            </Paper>
            </Grid>
            </Grid>
        </div>
    )
}
