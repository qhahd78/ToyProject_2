// eslint-disable-next-line
import React, {Component} from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';
import GoogleSignin from './Components/Sign';
import Home from './routes/Home';
import BoxMovie from './routes/WeekBoxMovie';
import DayBoxMovie from './routes/DayBoxMovie';

function App(){
  return (
    <div>
      <GoogleSignin />
      <p>
            <h1>오늘의 박스오피스목록</h1>
      </p>
      <DayBoxMovie />
      <p>
            <h1>무작위 영화목록</h1>
      </p>
      <Home />
      <p>
            <h1>이번주 박스오피스 영화목록</h1>
      </p>
      <BoxMovie />
    </div>
    );
  }

export default App;



