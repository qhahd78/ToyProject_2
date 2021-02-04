import React from 'react';
import axios from 'axios';
import DayMovie from '../Components/DayMovie';

class DayBoxMovie extends React.Component{
    state= {
      isLoading : true,
      daymovies : [],
      }
  
    getDayBoxMovies = async() => {
      const {data: {
          boxOfficeResult:
          {dailyBoxOfficeList}
       } 
    }
       = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f6649d26347bb450475cfb25dee1dd41&targetDt=20190131');
    
    this.setState({daymovies: dailyBoxOfficeList, isLoading: false})
    }
  
    componentDidMount(){
      this.getDayBoxMovies();
    }
  
    render (){
      const {isLoading, daymovies} = this.state;
      
        return <div>{isLoading ? "Loading .. " : daymovies.map((daymovie) => {

        return (
            <DayMovie 
            kkkey={daymovie.movieCd}
            tiiitle={daymovie.movieNm}
            />
        )
      })}</div>;
      }
    }
  
  export default DayBoxMovie;