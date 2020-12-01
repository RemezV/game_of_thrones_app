import React from 'react'
import './errorMessage.sass'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>  
            <img src={img} alt='wrong'/>
            <span className="error-message">Something goes wrong...</span>
        </>
    )
}

export default ErrorMessage