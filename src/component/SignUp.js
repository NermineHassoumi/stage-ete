import React, { useRef, useState } from 'react';
import { auth } from "../utils/firebase.config";

const SignUp = () => {
  //  const registerEmail = useRef(); //recuperer les information tapees dans les inputs
        //recuperer la valeur dans useref
    const registerEmail = useRef();
    const registerPassword = useRef();
    const [displayName, setDisplayName] = useState(""); //on incremente displayname lorsque on ecrit le pseudo
    const handleRegister = (e) => {
        e.preventDefault();
        try{ //essayer d'incrementer les choses suiv dans la bd
         
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value
                )
                .then(async (userAuth) => {
                  await userAuth.user.updateProfile({
                    displayName,
                 });
                    console.log(userAuth); 
                    window.location.reload();
                });
               
        } catch(error){
            console.log(error.message);
        }
    };

           return (
        <div className='signup-container'>
            <div className='signup'>
                <h3>S'inscrire</h3>
                <form onSubmit={e => handleRegister(e)}>
                   <input class ="text" type="text" placeholder='Pseudo' required onChange={(e) => setDisplayName(e.target.value)} />
                   <input class ="text" type="email" placeholder="Email" required ref={registerEmail}  /> 
                   <input class ="text" type="password" placeholder="Mot de passe" required ref={registerPassword}  />
                   <input class ="text" type="submit" value="Valider inscription" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;