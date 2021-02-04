import React from 'react';
import './DayMovie.css';

function DayMovie ({kkkey, tiiitle}) {
    return (
        <p>
            <span className="movie-title">{tiiitle}</span>
            <span className="movie-year">{kkkey}</span>  
        </p>  
    )
}

export default DayMovie;