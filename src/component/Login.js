import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../utils/firebase.config';

const Login = () => {
const loginEmail = useRef();
const loginPassword = useRef();
const handleLogin = async (e) =>{
    e.preventDefault(); //pour ne pas changer de page
    try {
  const user = await signInWithEmailAndPassword(
    auth,loginEmail.current.value,
    loginPassword.current.value
  );
  console.log(user);
    } catch(error){
        console.log(error.message);
    }
    console.log(loginEmail.current.value, loginPassword.current.value );
}; 

    return (
       <div className='login-container'>
         <div className='login'>
            <h3>Se connecter</h3>
            <form className="form-login" onSubmit={e => handleLogin(e)}>
               
                <input class ="text" type="email" placeholder='Email' required ref={loginEmail} />
                <input class ="text" type="password" placeholder='Mot de passe' required ref={loginPassword} />
                <input class ="text" type="submit" value="se connecter"/>
               
            </form>
         </div>
       </div>
    );
};

export default Login;