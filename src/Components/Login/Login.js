import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import './Login.css'
import "firebase/auth";
import firebaseConfig from './firebase.config'
import logo from '../../logos/google.png'
import headerLogo from '../../logos/Group 1329.png'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [user, setUser] = useState({
        isSignIn:false,
        name:'',
        email:'',
    })

    const history = useHistory();
    const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

     //sign in with google
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then( res => {
          const {displayName, email} = res.user;
          const userSignIn = {
            isSignIn:true,
            name: displayName,
            email: email
          }
          setUser(userSignIn);
          setLoggedInUser(userSignIn);
          history.replace(from);
          console.log(res);
        })
        .catch(error => console.log(error))
      }
      
      
    return (
      <>
      <img style={{width:'150px', marginLeft:'630px', marginTop:'50px'}} src={headerLogo} alt=""/>
        <div className="loginStyle">
            <h2 style={{ textAlign:'center', marginTop:'100px'}}>Login With</h2>
            <div onClick={handleSignIn} className="style">
                <img src={logo} alt="" style={{width:'35px', marginLeft:'30px'}}/>
                <h4 style={{ marginLeft:'50px'}}>Continue with google</h4>
            </div>
            <h6 style={{textAlign:'center',marginTop:'10px'}}>Don't have an account?<span style={{color:'blue'}}>Create an account</span></h6>
        </div>
        </>
    );
};

export default Login;