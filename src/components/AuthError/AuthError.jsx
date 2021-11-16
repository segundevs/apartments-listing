import React from 'react';
import './authError.style.scss';

const AuthError = ({component}) => {
  return (
    <div className="error-div">
      <p>{component}</p>
    </div>
  )
}

export default AuthError
