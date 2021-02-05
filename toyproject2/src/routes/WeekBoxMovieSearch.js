import React from 'react';
import axios from 'axios';
import WeekMovieSearch from '../Components/WeekMovieSearch';

class WeekBoxMovieSearch extends React.Component{

    state= {
      isLoading : true,
      boxmovies : [],
      value: "",
      }
  
    getBoxMovies = async() => {
      const search = this.state.value;

      try{
        if (search === "") {
          this.setState({ none: "결과값이 없습니다. ", movies: [], isLoading: false })
        // if(search === ""){
        //   const {data: {
        //     boxOfficeResult:
        //     {weeklyBoxOfficeList}
        //   }
        //   }
        //   = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f6649d26347bb450475cfb25dee1dd41&weekGb=0', {
        //     params: {targetDt: 20200304}
        //   });

        //   this.setState({boxMovies: weeklyBoxOfficeList, isLoading: false})
        //   console.log(weeklyBoxOfficeList)
        } else {
      
          const {data: {
              boxOfficeResult:
              {weeklyBoxOfficeList}
          } 
          }
          = await axios.get('http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f6649d26347bb450475cfb25dee1dd41&weekGb=0', {
            params: {targetDt: search}
          });
        
        this.setState({boxmovies: weeklyBoxOfficeList, isLoading: false})
      }
  } catch (error) {
    console.log(error)
  }
    }
    
    handleChange = (e) => {
      this.setState({value: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.getBoxMovies();

    }

    componentDidMount(){
      this.getBoxMovies();
    }
  
    render (){
      const {isLoading, boxmovies, search} = this.state;
  
        return (
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value}onChange={this.handleChange} placeholder="yyyy-mm-dd 형식으로 날짜를 입력하세요."></input>
            <div>
              {search === "" ? <h1>검색창에 암것두 없어 ,, </h1> : 
              
                boxmovies.map(boxmovie => (
                <WeekMovieSearch 
                key={boxmovie.movieCd}
                title={boxmovie.movieNm}
                />
              ))}
            </div>
          </form>
        )
    }
}
  
  export default WeekBoxMovieSearch;