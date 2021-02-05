import React from 'react';

function DayMovieSearch({key, title, titleEng, salesAmt}){
    return(
        <p>
            <span>{key}</span>
            <span className="movie-title">{title}</span>
            <span>{titleEng}</span><br></br>
            <span>매출액 : {salesAmt} 원</span>
        </p>
    )
}

export default DayMovieSearch;