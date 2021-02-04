// eslint-disable-next-line
import React, {Component} from 'react';

// firebase import 
import 'firebase/firestore';
import 'firebase/auth';
import './App.css';
import GoogleSignin from './Components/Sign';

import {HashRouter, Route} from 'react-router-dom';

import Home from './routes/Home';
import Search from './routes/Search';
import DayBoxMovie from './routes/DayBoxMovie';
import WeekBoxMovie from './routes/WeekBoxMovie';

function App(){
  return (
    // <HashRouter>
    //   <Route path="/" component={GoogleSignin} />
    //   <Route path="/week" component={WeekBoxMovie} />
    //   <Route path="/day" component={DayBoxMovie} />
    // </HashRouter>
    <div id="full">
      <nav className="nav">
        <GoogleSignin />
        <div className="ss">
          <Search />
        </div>
      </nav>


      <div className="body">
        <div className="movie-list">
            <p className="title">오늘의 박스오피스목록</p>
            <div className="movie-list2">
                <DayBoxMovie />
            </div>
        </div>
        {/* <div className="movie-list">
            <p className="title">무작위 영화목록</p>
            <div className="movie-list2">
              <Home />
            </div>
            
        </div>
        */}
        <div className="movie-list">
            <p className="title">이번주 박스오피스 영화목록</p>
            <div className="movie-list2">
              <WeekBoxMovie />
            </div>
        </div>
      </div>
    </div>
    );
  }

export default App;



