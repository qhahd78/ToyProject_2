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
import WeekBoxMovieSearch from './routes/WeekBoxMovieSearch';
import DailyBoxMovieSearch from './routes/DailyBoxMovieSearch'



function App(){
  return (
    <div id="full">
      <nav className="nav">
        <GoogleSignin />
      </nav>


      <div className="body">
        <div className="movie-list">
            <p className="title">오늘의 박스오피스목록</p>
            <div className="movie-list2">
                <DayBoxMovie />
            </div>
        </div>

        <div className="movie-list">
            <p className="title">무작위 영화목록</p>
            <div className="movie-list2">
              <Home />
            </div>
        </div>

        <div className="movie-list">
            <p className="title">이번주 박스오피스목록</p>
            <div className="movie-list2">
              <WeekBoxMovie />
            </div>
        </div>

      {/* <HashRouter>
        <Route path="/detail" component={Detail} />
      </HashRouter> */}
      </div>
      <div className="ss">
        <p className="title">영화 검색</p>
          <span><Search /></span>
        <p className="title">주별 박스오피스목록 검색</p>
          <span><WeekBoxMovieSearch /></span>
          <p className="title">오늘의 박스오피스 목록 검색</p>
          <span><DailyBoxMovieSearch /></span>
        </div>
    </div>
    );
  }

export default App;



