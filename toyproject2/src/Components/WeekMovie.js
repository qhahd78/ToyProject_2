import React from 'react';


function WeekMovie({kkey, tiitle}) {
    return(
        <p>
            <span className="movie-title">{tiitle}</span>
            <span>{kkey}</span>
        </p>

    )
}

export default WeekMovie;