import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from '../firebaseConfig';
import { auth } from "../firebaseConfig";
import {HashRouter, Route} from 'react-router-dom';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';

// let user = firebase.auth().currentUser;

function GoogleSignin() {
    auth.onAuthStateChanged(user => {
        
        if(user !== null){
            console.log(`${user.displayName} 님이 로그인 했습니다. `);
            
            
        }
    })
    
    return (
        <div>
            <button onClick={signInWithGoogle}>로그인</button>
            <button onClick={() => { 
                            auth.signOut(); 
                            alert('로그아웃 합니다');
                            console.log('로그아웃했습니다.')
                        }}>로그아웃</button>
        </div>
    )
}

export default GoogleSignin;