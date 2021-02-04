import React from 'react';
import PropTypes from 'prop-types';

function Movie({title, prdtYear}) {
    return (
        <div>
            <h2>{title}</h2>
            <h3>{prdtYear}</h3>
        </div>
    )
}

export default Movie;