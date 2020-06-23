import React from 'react'
import { makeStyles, Paper, Grid, Button, IconButton } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
export default function AdminLogin() {
    const [values, setValues] = React.useState({
        name: '',
        password: '',
        showPassword: false,
      });    

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
    const handleSubmit = () => {
        console.log(values)
    }

    const classes = style()
    return (
        <div>
            <Grid container className={classes.inputContainer} justify="center" alignItems="center" direction="column">
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={2}>
                        <Grid container direction="column">
                            <TextField className={classes.input} label="username" variant="outlined" onChange={handleChange('name')} />
                            <FormControl className={classes.input} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    label="Password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <Button color="primary" onClick={handleSubmit} endIcon={<ArrowForwardIosIcon />}>Login</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
