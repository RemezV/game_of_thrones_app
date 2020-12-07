import React from 'react'
import './errorMessage.sass'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <div className="error-block">  
            <span className="error-message">Something goes wrong...</span>
            <img src={img} alt='wrong'/>
            
        </div>
    )
}

export default ErrorMessage