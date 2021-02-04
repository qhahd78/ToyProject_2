import React from 'react';
import axios from 'axios';


function WeekMovie({kkey, tiitle}) {
    return(
        <div>
            <h2>{tiitle}</h2>
            <h3>{kkey}</h3>
        </div>

    )
}

export default WeekMovie;