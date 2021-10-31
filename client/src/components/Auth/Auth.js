import React, { useState, useCallback } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Input from './Input';
import Icon from './icon';
import { signup, signin } from '../../actions/auth';

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }


const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();

    const callSignup = useCallback((formData, history) => dispatch(signup(formData, history)), [dispatch]);
    const callSignin = useCallback((formData, history) => dispatch(signin(formData, history)), [dispatch]);


    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //res가 존재한다면 profileObj를 반환하고, 존재하지 않는다면 undefined를 반환.
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try again later');
    }




    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} inputProps={{ maxLength: 8 }} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} error={"password" === '' ? true : false} helperText="비밀번호 8자 이상" />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="180758649113-njgcdc6svtpmvt1tslovo346a8ogih9a.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} className={classes.authButton}>
                                {isSignup ? 'already had an account ➤ Sign In' : "don't have an account ➤ Sign Up"}
                            </Button>

                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
