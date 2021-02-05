import React from 'react';
import './WeekMovie.css';


function WeekMovie({kkey, tiitle, rank}) {
    return(
        <p>
            <span className="rank">{rank}위</span>
            <span className="movie-title">{tiitle}</span>
            
        </p>

    )
}

export default WeekMovie;