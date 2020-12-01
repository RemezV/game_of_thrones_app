import React from 'react'
import './errorMessage.sass'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>  
            <span className="error-message">Something goes wrong...</span>
            <img src={img} alt='wrong'/>
            
        </>
    )
}

export default ErrorMessage