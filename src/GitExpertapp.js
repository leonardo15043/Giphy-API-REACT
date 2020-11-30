import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import AddCategory from './components/AddCategory';



const GitExpertapp = props => {

    const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);

    const handleAdd = () =>{
        setCategories( [ 'HunterXHunter', ... categories ] )
    }


    return (
        <Fragment>
            <h2>GitExpertapp</h2>
           <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( category =>{
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>

        </Fragment>
    )
}

GitExpertapp.propTypes = {

}

export default GitExpertapp
