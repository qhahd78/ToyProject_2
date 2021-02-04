import React from 'react';
import axios from 'axios';
import SearchMovie from '../Components/SearchMovie';

class Search extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: "",
    none: "",
  }

  getMovies = async () => {
    const search = this.state.value;

    try {
      if (search === "") {
        this.setState({ none: "결과값이 없습니다. ", movies: [], isLoading: false })
      } else {

        const { data: {
          movieListResult:
          { movieList }
        }
        }
          = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f6649d26347bb450475cfb25dee1dd41&targetDt=20210101&itemPerPage=20", {
            params: { movieNm: search }
          });
        console.log(search)
        this.setState({ movies: movieList, isLoading: false })
        console.log(movieList)
      }
    } catch (error) {
      console.log(error);
    }
  };


  componentDidMount() {
    this.getMovies();
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getMovies();
  }



  render() {
    const { isLoading, movies, none } = this.state;
    return (
      <section>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="영화를 검색하세요.">
            </input>
            <div>
              {movies.map(movie => (
                <SearchMovie
                  key={movie.movieCd}
                  title={movie.movieNm} />
              ))}
            </div>
          </form>


        </div>
      </section>
    )
  }
}


export default Search;

