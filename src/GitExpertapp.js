import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GitExpertapp = props => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const handleAdd = () =>{
        setCategories( [ 'HunterXHunter', ... categories ] )
    }

    return (
        <Fragment>
            <h2>GitExpertapp</h2>
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map( category =>(
                        <GifGrid key={ category } category={ category }/>
                    ))
                }
            </ol>

        </Fragment>
    )
}

export default GitExpertapp
