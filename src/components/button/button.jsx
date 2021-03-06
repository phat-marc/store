import React from 'react';

import './button.scss';

// a button and input can share the type of submit but here we need to also add the forms onSubmit, so start by passing in children and then destructure all otherProps
const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
    {...otherProps}
  >
    {children}
  </button>
)

export default Button;