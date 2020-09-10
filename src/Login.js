import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{user},dispatch] = useStateValue();
    const signIn = () => {
        //sign in ...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
                console.log(result);
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg" alt="" />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>

    );
}

export default Login;
