import React from 'react';

function SearchMovie({key, title, titleEng, openDt}){
    return(
        <p>
            <span>{key}</span>
            <span className="movie-title">{title}</span>
            <span>({titleEng})</span><br></br>
            <span>개봉일: {openDt}</span>
        </p>
    )
}

export default SearchMovie;