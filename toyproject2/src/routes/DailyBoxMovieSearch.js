import React from 'react';
import axios from 'axios';
import DayMovieSearch from '../Components/DayMovieSearch';
import './search.css';

class DailyBoxMovieSearch extends React.Component {
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
        this.setState({ movies: [], isLoading: false })
      } else {

        const { data: {
          boxOfficeResult:
          { dailyBoxOfficeList }
        }
        }
          = await axios.get("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f6649d26347bb450475cfb25dee1dd41", {
            params: { targetDt : search }
          });
        // console.log(search)
        this.setState({ movies: dailyBoxOfficeList, isLoading: false })
        // console.log(dailyBox)
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
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="오늘의 날짜를 입력하세요.">
            </input>
            <div>
              {movies.map(movie => (
                <DayMovieSearch
                  key={movie.movieCd}
                  title={movie.movieNm} 
                  titleEng={movie.movieNmEn}
                  salesAmt={movie.salesAmt}

                  />
                  
              ))}
            </div>
          </form>


        </div>
      </section>
    )
  }
}


export default DailyBoxMovieSearch;

