import React, { Fragment,useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory(props) {

    const [ inputValue, setInputValue ] = useState('Hola Mundo')

    const handleInputChange = (e)=>{
        setInputValue( e.target.value );
    }

    return (
        <Fragment>
            <h2>App Categories</h2>
            <input type="text" value={ inputValue } onChange={ handleInputChange } />
        </Fragment>
    )
}

AddCategory.propTypes = {

}

export default AddCategory



