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
export default function TeacherLogin() {
    const classes = style()
    const [values, setValues] = React.useState({
        name: '',
        section: ''
      });    

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const handleSubmit = () => {
        console.log(values)
    }

    return (
        <div>
            <Grid container  className={classes.inputContainer} justify="center" alignItems="center" direction="column">
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
                <Grid  container direction="column">
                <TextField className={classes.input} label="Name" variant="outlined" onChange={handleChange('name')} />
                <TextField className={classes.input} label="Section" variant="outlined" onChange={handleChange('section')} />
                <Button color="primary" onClick={handleSubmit} endIcon={<ArrowForwardIosIcon/>}>Login</Button>
                </Grid>
            </Paper>
            </Grid>
            </Grid>
        </div>
    )
}
