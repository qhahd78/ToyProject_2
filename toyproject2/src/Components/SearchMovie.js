import React from 'react';

function SearchMovie({key, title}){
    return(
        <div>
            <h1>{key}</h1>
            <h1>{title}</h1>
        </div>
    )
}

export default SearchMovie;