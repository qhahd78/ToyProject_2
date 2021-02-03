import React, {Component} from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import { signInWithGoogle } from './firebaseConfig';
import { auth } from './firebaseConfig';
import './App.css';
import GoogleSignin from './Components/Sign';

function App(){
  return (
      <GoogleSignin />
    );
  }

export default App;



