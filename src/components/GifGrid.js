import React, { Fragment, useEffect, useState } from 'react';
import { useFetchGifts } from '../hooks/userFetchGifts';
import { GitGridItem } from './GitGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifts( category );

    return ( 
        <Fragment>
        <h3> { category } </h3>
        { loading && <p> Loading </p>}
        <div className="card-grid">        
            
                {
                    data.map( img =>(
                        <GitGridItem key={ img.id }  { ...img } />
                    ))
                } 
            
        </div>
        </Fragment>

    )

}
