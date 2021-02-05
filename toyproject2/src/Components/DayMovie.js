import React from 'react';
import './DayMovie.css';

function DayMovie ({kkkey, tiiitle, audiAcc}) {
    return (
        <p>
            <span className="movie-title">{tiiitle}</span><br></br>
            <span>누적 관객수 : {audiAcc} 명</span>
        </p>  
    )
}

export default DayMovie;