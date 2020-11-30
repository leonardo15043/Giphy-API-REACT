import React, { Fragment,useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory( { setCategories } ) {

    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = (e)=>{
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCategories( cats => [ ...cats, inputValue ] ); // agregamos nuevos elementos a nuestra lista 
        setInputValue(''); // refrescamos el input
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>App Categories</h2>
            <input type="text" value={ inputValue } onChange={ handleInputChange } />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} 

export default AddCategory



