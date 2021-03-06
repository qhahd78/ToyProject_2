import React from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';

class Home extends React.Component{
    state = {
        isLoading: true,
        movies: [],
      }

      getMovies = async () => {
        const {data: { 
          movieListResult: 
          {movieList}
         }
       }
         = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f6649d26347bb450475cfb25dee1dd41&itemPerPage=20");
        this.setState({ movies: movieList, isLoading: false })
      }
      componentDidMount() {
        this.getMovies();
      }
      render () {
        const {isLoading, movies} = this.state;
        return <div>{ isLoading ? "Loading..." : movies.map((movie) => {
          return (
            <Movie 
             key={movie.movieCd}
             title={movie.movieNm}
             titleEng={movie.movieNmEn}
             genre={movie.genreAlt}
             prdtYear={movie.prdtYear}
             openYear={movie.openDt}
             />
          )
        })}</div>;
      }
     }

export default Home;
