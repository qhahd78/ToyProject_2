import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from '../firebaseConfig';
import { auth } from "../firebaseConfig";

// let user = firebase.auth().currentUser;

function GoogleSignin(props) {
    auth.onAuthStateChanged(user => {

        if(user !== null){
            alert(`${user.displayName} 님이 로그인 했습니다. `);
            return false;
        }
    })
    
    return (
        <div>
            <button onClick={signInWithGoogle}>로그인</button>
            <button onClick={() => { 
                            auth.signOut(); 
                            alert('로그아웃 합니다');
                        }}>로그아웃</button>
        </div>
    )
}

export default GoogleSignin;