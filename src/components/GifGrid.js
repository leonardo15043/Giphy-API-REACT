import React, { Fragment, useEffect, useState } from 'react';
import { GitGridItem } from './GitGridItem';

export const GifGrid = ({ category }) => {

    const [images, setimages] = useState([]);

    useEffect( ()=>{
        getGifs();
    },[])

    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=One+Punch&limit=10&api_key=48Qzvn6bYuINFc6tnXrL0MfuU7Njc9zf';
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id : img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        setimages(gifs);
    }

    return ( 
        <Fragment>
        <h3> { category } </h3>
        <div className="card-grid">
            
            <ol>
                {
                    images.map( img =>(
                        <GitGridItem key={ img.id }  { ...img } />
                    ))
                } 
            </ol>
        </div>
        </Fragment>

    )

}
