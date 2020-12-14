import React,{ useState } from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import { auth, provider } from './controller/firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const [{},dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>
            {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error)=> alert(error.message));
    };
    return(
    <div className="login">
        <div className="login_container">
            <img
                src="https://api.iconify.design/simple-icons:whatsapp.svg?height=200"
                alt=""
            />
            <div className="login_text">
                <h1>Sign in to Adda App</h1>
            </div>

            <Button onClick={signIn}>
                Sign In With Google
            </Button>
        </div>      
    </div>
    
    
    )        
}

export default Login
