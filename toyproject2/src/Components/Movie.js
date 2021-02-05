import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({title, prdtYear, titleEng, openYear}) {
    return (
        <p>
            
            <span className="movie-title">{title}</span>
            <span>({titleEng})</span><br></br>
            <span>{prdtYear}제작</span> <br></br>
            {/* <span>{openYear} 개봉</span> */}
            {/* </Link> */}
        </p>
    )
}

export default Movie;