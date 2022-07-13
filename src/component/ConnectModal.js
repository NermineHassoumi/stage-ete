import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const ConnectModal = () => {
    const [signUp, setSignUp] = useState(true);

    return (
      <div className='connect-modal'>
           <div className="header-btn">
              <button style={{background: signUp ? "rgb(113, 111, 111)" : "rgb(69, 67, 67)"}}
               onClick={() => setSignUp(true)}>
                s'inscrire
             </button>
              <button style={{background: signUp ? "rgb(69, 67, 67)" : "rgb(113, 111, 111)"}}
               onClick={() => setSignUp(false)}>
                se connecter
               </button>
           </div>
     {signUp ? <SignUp /> : <Login />}
      </div>
      
    
    );
};

export default ConnectModal;