// eslint-disable-next-line
import React, {Component} from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';
import GoogleSignin from './Components/Sign';
import Home from './routes/Home';

function App(){
  return (
    <div>
      <GoogleSignin />
      <Home />
    </div>
    );
  }

export default App;



