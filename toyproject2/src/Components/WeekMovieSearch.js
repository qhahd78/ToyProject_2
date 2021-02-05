import React from 'react';


function WeekBoxMovieSearch({key, title, titleEng, audiCnt}) {
    return(
        <p>
            <span className="movie-title">{title}</span>
            <span>{key}</span>
            <span>{titleEng}</span><br></br>
            <span>오늘의 관객수 : {audiCnt} 명</span>
        </p>

    )
}

export default WeekBoxMovieSearch;