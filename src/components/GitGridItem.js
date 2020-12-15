import React from 'react'
import PropTypes from 'prop-types';

export const GitGridItem = ( { id, title, url } ) => {

    return (
        <div className="card animate__animated animate__fadeInLeft">
            <img src={ url } alt={ title } />
            <p>{ title}</p>
        </div>
    )
}


GitGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
} 