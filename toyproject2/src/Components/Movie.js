import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, prdtYear}) {
    return (
        <p>
            <span className="movie-title">{title}</span>
            <span>{prdtYear}</span>
        </p>
    )
}

export default Movie;