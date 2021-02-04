import React from 'react';
import axios from 'axios';
import WeekMovie from '../Components/WeekMovie';

class WeekBoxMovie extends React.Component{
    state= {
      isLoading : true,
      boxmovies : [],
      }
  
    getBoxMovies = async() => {
      const {data: {
          boxOfficeResult:
          {weeklyBoxOfficeList}
       } 
    }
       = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f6649d26347bb450475cfb25dee1dd41&targetDt=20210131');
    
  
    console.log(weeklyBoxOfficeList)
    this.setState({boxmovies: weeklyBoxOfficeList, isLoading: false})
    }
  
    componentDidMount(){
      this.getBoxMovies();
    }
  
    render (){
      const {isLoading, boxmovies} = this.state;
      
        return <div>{isLoading ? "Loading .. " : boxmovies.map((boxmovie) => {
        console.log(boxmovie);
  
        return (
            <WeekMovie 
            kkey={boxmovie.movieCd}
            tiitle={boxmovie.movieNm}
            />
        )
      })}</div>;
      }
    }
  
  export default WeekBoxMovie;