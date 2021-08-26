import React, { useEffect, useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, CircularProgress } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import  KakaoLogin  from 'react-kakao-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import { signup, signin, kakaoLogin } from '../../actions/auth';
import { KAKAO_AUTH_URL } from './kakaoOAuth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
	const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

	const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData, history));
        } else {
            dispatch(signin(formData, history));
        }
	}

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj; //res가 존재한다면 profileObj를 반환하고, 존재하지 않는다면 undefined를 반환.
        const token = res?.tokenId;
        
        try {
            dispatch({ type: 'AUTH', data: { result, token }});

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google Sign In was unsuccessful. Try again later');
    }

    const KakaoHandler = (props) => {
        let code = new URL(window.loaction.href).searchParams.get("code");

        useEffect(() => {
            dispatch(kakaoLogin(formData, history));
        }, []);

        return <CircularProgress />
    }

    //const handleLoginKakao = () => {
        //Kakao.auth.login({
            //success: function(authObj) {
                //fetch(`${KAKAO_LOGIN_API_URL}`, { 
                    //method: 'POST',
                    //body: JSON.stringify({ access_token: authObj.access_token,}),
                //})
            //}
        //})
        //.then(res => res.json())
        //.then(res => {
            //localStorage.setItem("Kakao_token", res.access_token);
            //if(res.access_token) {
                //alert("Music Tag App에 오신걸 환영합니다");
                //history.push('/login');
            //}
            
        //})
    //}
    

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
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
					</Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In'}
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
                    <KakaoLogin
                        jsKey="57cbb8f1f02adcfbf259f8d490e9bd15"
                        onSuccess={result => KakaoHandler(result)}
                        onFailure={result => console.log(result)}
                        render={(props: any) => (
                            <Button className={classes.kakaoBtn} href={KAKAO_AUTH_URL} onClick={props.onClick}>Kakao Login</Button>
                        )}
                        getProfile={true}
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode} className={classes.authButton}>
                                { isSignup ? 'already had an account ➤ Sign In' : "don't have an account ➤ Sign Up"}
                            </Button>

                        </Grid>

                    </Grid>
				</form>
			</Paper>
		</Container>
	)
}

export default Auth
