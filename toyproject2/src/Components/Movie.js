import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, prdtYear}) {
    return (
        <div>
            <h1>{title}</h1>
            <h3>{prdtYear}</h3>
        </div>
    )
}

export default Movie;