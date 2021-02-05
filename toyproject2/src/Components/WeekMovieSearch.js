import React from 'react';


function WeekBoxMovieSearch({key, title}) {
    return(
        <p>
            <span className="movie-title">{title}</span>
            <span>{key}</span>
        </p>

    )
}

export default WeekBoxMovieSearch;